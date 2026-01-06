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
      toast.remove();
      toast.error("No internet connection! Please check your connection!");
      return Promise.reject(
        new Error("No internet connection! Please check your connection!"),
      );
    }

    const accessToken = secureLocalStorage.getItem("accessToken") as string;
    if (accessToken) {
      headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

apiClient.interceptors.response.use(
  (response) => {
    const errorMesage = response.data.message;
    const statusCode = response.status;

    if (response.status === 403) return response;

    switch (statusCode) {
      case 200:
        return response.data;
      case 201:
        return response.data;
      case 401:
        throw UnauthenticatedError(errorMesage);
      case 404:
        throw NotFoundError(errorMesage);
      case 409:
        throw ConflictError(errorMesage);
      default:
        if (statusCode && statusCode !== 200) {
          throw ServerError(errorMesage);
        }
        return response.data;
    }
  },
  async (error: AxiosError<any>) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & {
      _retry?: boolean;
    };
    const status = error.response?.status;

    if (status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const accessToken = secureLocalStorage.getItem("accessToken") as string;
        if (!accessToken) return;

        const { data } = await axios.post(`${BASE_URL}/users/refresh-token`, {
          accessToken: accessToken,
        });

        const newToken = data.data.accessToken as string;
        secureLocalStorage.setItem("accessToken", newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      } catch (refreshError) {
        secureLocalStorage.removeItem("accessToken");
        return Promise.reject(refreshError);
      }
    }

    switch (status) {
      case 401:
        throw UnauthenticatedError(error.response?.data?.message);
      case 404:
        throw NotFoundError(error.response?.data?.message);
      case 409:
        throw ConflictError(error.response?.data?.message);
      default:
        throw ServerError(error.response?.data?.message);
    }
  },
);

export default apiClient;
