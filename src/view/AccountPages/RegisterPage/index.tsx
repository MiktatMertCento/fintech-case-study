import React, { useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { Helmet } from "react-helmet-async";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import { Button, GoogleLoginButton, TextField } from "components";

import { useAppContext } from "context/AppContext";

import { BaseError } from "core";
import { useRegister } from "core/Queries/useUserQueries";
import { RegisterRequest } from "core/Queries/useUserQueries/interfaces";

const initialFormValues: RegisterRequest = {
  fullName: "",
  email: "",
  password: "",
};

function RegisterPage() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const register = useRegister();

  const registerSchema = yup.object().shape({
    fullName: yup.string().min(3).required().label("Full Name"),
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
  } = useForm<RegisterRequest>({
    mode: "onSubmit",
    resolver: yupResolver(registerSchema),
    defaultValues: initialFormValues,
  });

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [navigate, user]);

  const handleNavigateLogin = () => {
    navigate("/login");
  };

  const onSubmit: SubmitHandler<RegisterRequest> = async (data) => {
    try {
      const registerResponse = await register.mutateAsync(data);
      toast.success(registerResponse.message);

      handleNavigateLogin();

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
    <div className="flex min-h-screen w-full bg-white">
      <Helmet title="Fintech - Register" />

      <div className="relative flex w-full flex-col justify-center px-6 py-12 lg:w-1/2 lg:px-20 xl:px-32">
        <div className="mx-auto w-full max-w-md mt-16 lg:mt-0">
          <div className="absolute top-10">
            <img
                alt="Fintech Logo"
                src="/images/Fintech.svg"
                className="h-8 w-auto"
            />
          </div>

          <h1 className="text-4xl font-bold text-slate-900">
            Create new account
          </h1>
          <p className="mt-3 text-lg text-slate-500">
            Welcome back! Please enter your details
          </p>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-10 flex flex-col gap-4"
          >
            <Controller
              name="fullName"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  type="text"
                  label="Full Name"
                  placeholder="Miktat Cento"
                  error={errors.fullName?.message}
                  {...field}
                />
              )}
            />

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
                  {...field}
                />
              )}
            />

            <div className="mt-2">
              <Button label="Create Account" type="submit" />
            </div>

            <GoogleLoginButton />
          </form>

          <p className="mt-8 text-center text-sm text-slate-500">
            Don&#39;t have an account?{" "}
            <a
              onClick={handleNavigateLogin}
              className="font-bold text-slate-900 hover:underline relative inline-block cursor-pointer"
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

      <div className="hidden lg:block lg:w-1/2 relative bg-gray-100">
        <img
          src="/images/Poster.png"
          alt="Cover"
          className="absolute inset-0 h-full w-full object-cover pointer-events-none"
        />
      </div>
    </div>
  );
}

export default RegisterPage;
