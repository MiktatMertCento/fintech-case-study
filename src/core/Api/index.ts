import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import toast from "react-hot-toast";
import secureLocalStorage from "react-secure-storage";

import {
  ConflictError,
  NotFoundError,
  ServerError,
  UnauthenticatedError,
} from "./Errors";

const BASE_URL = import.meta.env.VITE_BASE_API_URL;

interface FailedRequestQueueItem {
  resolve: (token: string) => void;
  reject: (error: any) => void;
}

let isRefreshing = false;
let failedQueue: FailedRequestQueueItem[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token as string);
    }
  });
  failedQueue = [];
};

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const { headers } = config;

      if (!navigator.onLine) {
        const errorMsg = "No internet connection! Please check your connection!";
        toast.error(errorMsg);
        return Promise.reject(new Error(errorMsg));
      }

      const accessToken = secureLocalStorage.getItem("accessToken") as string;
      if (accessToken) {
        headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
    (response) => response.data,
    async (error: AxiosError<any>) => {
      const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };
      const status = error.response?.status;
      const errorMessage = error.response?.data?.message || error.message;

      if (status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          return new Promise<any>((resolve, reject) => {
            failedQueue.push({
              resolve: (token: string) => {
                originalRequest.headers.Authorization = `Bearer ${token}`;
                resolve(apiClient(originalRequest));
              },
              reject: (err: any) => {
                reject(err);
              },
            });
          });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          const currentToken = secureLocalStorage.getItem("accessToken");
          const { data } = await axios.post(`${BASE_URL}/users/refresh-token`, {
            accessToken: currentToken,
          });

          const newToken = data.data.accessToken;
          secureLocalStorage.setItem("accessToken", newToken);

          apiClient.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;
          processQueue(null, newToken);

          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          return apiClient(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError, null);
          secureLocalStorage.removeItem("accessToken");
          return Promise.reject(refreshError);
        } finally {
          isRefreshing = false;
        }
      }

      switch (status) {
        case 401:
          throw UnauthenticatedError(errorMessage);
        case 404:
          throw NotFoundError(errorMessage);
        case 409:
          throw ConflictError(errorMessage);
        default:
          throw ServerError(errorMessage);
      }
    }
);

export default apiClient;