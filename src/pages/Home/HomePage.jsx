import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { FormInput } from '@src/components';
import { DashboardPathEnum } from '@src/libs/enum';
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginZodSchema } from '@src/libs/validation';

const HomePage = () => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(LoginZodSchema),
        defaultValues: {
            email: "", password: "",
        },
    });

    const onSubmit = (data) => {
        console.log("Login submitted:", data);
        navigate(DashboardPathEnum.path);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-lightDark">
            <div className="w-full max-w-md bg-blueNight p-8 rounded-2xl shadow-lg">
                {/* Header */}
                <h1
                    className="text-3xl font-poppins font-bold text-light-gray mb-6 text-center"
                >
                    Sign In
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Email */}
                    <FormInput
                        label="Email"
                        type="email"
                        id="email"
                        {...register("email")}
                        error={errors.email?.message}
                    />

                    {/* Password */}
                    <FormInput
                        label="Password"
                        type="password"
                        id="password"
                        {...register("password")}
                        error={errors.password?.message}
                    />

                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full bg-primary text-light-gray py-2 rounded-lg font-poppins font-semibold hover:bg-secondary transition-colors"
                    >
                        Login
                    </button>
                </form>

                {/* Footer */}
                <p className="mt-6 text-sm text-silver text-center">
                    Don’t have an account?{" "}
                    <a href="/register" className="text-livid hover:underline">
                        Sign Up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default HomePage;