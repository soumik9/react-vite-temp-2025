import PrimaryButton from '@src/components/Button/PrimaryButton';
import Input from '@src/components/Froms/Input';
import { DASHBOARD_LINKS } from '@src/libs/enum/link';
import { useLoginMutation } from '@src/redux-rtk/features/auth/authApi';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

const Login = () => {

    const naviagte = useNavigate();
    const { isAuthenticated } = useSelector((state) => state.auth);
    const [login, { isLoading }] = useLoginMutation();

    // states
    const [showPassword, setShowPassword] = useState(false);

    // check if logged in navigate to dashboard
    useEffect(() => {
        if (isAuthenticated) {
            naviagte(DASHBOARD_LINKS.DASHBOARD);
        }
    }, [isAuthenticated, naviagte]);

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const data = {
            phone: e.target.phone.value,
            password: e.target.password.value,
        }

        if (!data.phone || !data.password)
            return errorNotify('Fields are requried');

        // Validate phone number
        const phonePattern = /^\d{11}$/;
        if (!phonePattern.test(data.phone))
            return errorNotify('Phone number must be 11 digits');


        const formData = new FormData();
        formData.append("data", JSON.stringify(data));

        // rtk query called
        login(formData).unwrap()
            .then(response => {
                if (response.success) {
                    router.push('/panel/dashboard');
                }
            })
            .catch(error => {
                console.log(error?.data?.message);
            });
    }

    return (
        <div className="h-screen f-center flex-col bg-primary">

            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden  min-w-[800px]">
                <div className="hidden lg:block lg:w-1/2 bg-cover bg-center bg-no-repeat min-h-full"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                </div>

                <div className="w-full p-8 lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
                    <p className="text-xl text-gray-600 text-center">Welcome back!</p>

                    <form action="" className='my-8'
                        onSubmit={handleLoginSubmit}
                    >
                        <div className='flex flex-col gap-y-4 '>
                            <Input
                                label="Mobile Number"
                                id="phone"
                                defaultValue=""
                                placeholder="Enter your phone number"
                            />

                            <Input
                                label="Password"
                                id="password"
                                type={showPassword ? "text" : "password"}
                                passwordToggle
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                                defaultValue=""
                                placeholder="Enter your password"
                            />
                        </div>

                        <PrimaryButton text="Login" css="!w-full mt-8" isLoading={isLoading} />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
