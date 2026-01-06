import React, { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet-async";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import secureLocalStorage from "react-secure-storage";
import * as yup from "yup";

import { Button, FintechLogo, GoogleLoginButton, TextField } from "components";

import { useAppContext } from "context";
import { BaseError } from "core";
import { useLogin } from "core/Queries/useUserQueries";
import { LoginRequest } from "core/Queries/useUserQueries/interfaces";

const initialFormValues: LoginRequest = {
  email: "",
  password: "",
};

function LoginPage() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const login = useLogin();
  const { setUser } = useAppContext();

  const loginSchema = yup.object().shape({
    email: yup.string().email().required().label("Email"),
    password: yup
      .string()
      .min(8, "Password must be at least 8 characters.")
      .matches(/[a-z]/, "Password must contain at least one lowercase letter.")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter.")
      .matches(/\d/, "Password must contain at least one number.")
      .required("Password is required.")
      .label("Password"),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
    reset: clearFields,
  } = useForm<LoginRequest>({
    mode: "onSubmit",
    resolver: yupResolver(loginSchema),
    defaultValues: initialFormValues,
  });

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  const handleNavigateRegister = () => {
    navigate("/register");
  };

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    try {
      const loginResponse = await login.mutateAsync(data);
      setUser(loginResponse.data.user);
      toast.success(loginResponse.message);

      secureLocalStorage.setItem("accessToken", loginResponse.data.accessToken);

      navigate("/dashboard");

      clearFields();
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        toast.error(error.message);
      } else {
        toast.error("Unknown Error");
      }
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-ftBackground">
      <Helmet title="Fintech - Login" />

      <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-20 xl:px-32">
        <div className="mx-auto w-full max-w-md mt-16 lg:mt-0">
          <div className="absolute top-10">
            <FintechLogo className="h-8 w-auto" />
          </div>

          <h1 className="text-4xl font-bold ">Sign In</h1>
          <p className="mt-3 text-lg text-text3Color">
            Welcome back! Please enter your details
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-4"
          >
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  type="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  error={errors.email?.message}
                  disabled={login.isPending}
                  {...field}
                />
              )}
            />

            <Controller
              name="password"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  type="password"
                  label="Password"
                  placeholder="••••••••"
                  error={errors.password?.message}
                  disabled={login.isPending}
                  {...field}
                />
              )}
            />

            <div className="mt-2">
              <Button label="Sign In" type="submit" loading={login.isPending} />
            </div>

            <GoogleLoginButton label="Sign in with google" />
          </form>

          <p className="mt-8 text-center text-sm text-text2Color">
            Don&#39;t have an account?{" "}
            <a
              onClick={handleNavigateRegister}
              className="font-bold hover:underline relative inline-block cursor-pointer text-text1Color"
            >
              Sign up
              <img
                src="/images/Line.svg"
                className="absolute -bottom-3 left-0 w-full"
                alt="line"
              />
            </a>
          </p>
        </div>
      </div>

      <div className="hidden lg:block lg:w-1/2 relative bg-ftBackground">
        <img
          src="/images/Poster.png"
          alt="Cover"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}

export default LoginPage;
