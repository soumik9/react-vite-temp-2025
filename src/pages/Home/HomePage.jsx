import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router';
import { FormInput } from '@src/components';
import { DashboardPathEnum, LocalStorageKeyEnum } from '@src/libs/enum';
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginZodSchema } from '@src/libs/validation';
import { setCredential, useLoginMutation } from '@src/redux';
import { errorNotify, setLocalStorage, successNotify } from '@src/libs/helper';

const HomePage = () => {

    const navigate = useNavigate();
    const [login, { isLoading }] = useLoginMutation();

    const { register, handleSubmit, formState: { errors }, } = useForm({
        resolver: zodResolver(LoginZodSchema),
        defaultValues: {
            phone: "", password: "",
        },
    });

    const onSubmit = (data) => {
        login({ ...data, password: data.password.trim() }).unwrap()
            .then((response) => {
                if (response?.access_token) {
                    const { access_token, ...rest } = response;
                    setLocalStorage(LocalStorageKeyEnum.Auth, { user: rest, accessToken: access_token });
                    dispatch(setCredential({ user: rest, accessToken: access_token }));
                    successNotify("Login successful");
                    navigate(DashboardPathEnum.path);
                }
            }).catch((err) => {
                errorNotify(err?.data?.message);
            });
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
                    {/* phone number */}
                    <FormInput
                        label="Phone Number"
                        type="number"
                        id="phone"
                        {...register("phone")}
                        error={errors.phone?.message}
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
            </div>
        </div>
    );
};

export default HomePage;