import { useMutation, useQuery } from "@tanstack/react-query";

import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  User,
} from "./interfaces";

import fintechCore from "core";

interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const endPoint = "/users";

export const useRegister = () =>
  useMutation({
    mutationFn: async (
      credentials: RegisterRequest,
    ): Promise<ApiResponse<RegisterResponse>> =>
      fintechCore.api.post(`${endPoint}/register`, credentials),
  });

export const useLogin = () =>
  useMutation({
    mutationFn: async (
      credentials: LoginRequest,
    ): Promise<ApiResponse<LoginResponse>> =>
      fintechCore.api.post(`${endPoint}/login`, credentials),
  });

export const useGetUserProfile = (hasUserToken: boolean) =>
  useQuery({
    enabled: hasUserToken,
    queryKey: ["user-profile"],
    queryFn: async () =>
      fintechCore.api.get<User>(`${endPoint}/profile`).then((res) => res.data),
  });
