
import React from "react";
import { cn } from "@src/libs/hooks";
import { useSelector } from "react-redux";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Input = ({
    label, id, type = 'text', icon, labelRequired, error, inputCss, divCss,
    showPassword, setShowPassword, passwordToggle,
    ...props
}) => {

    // *global
    const global = useSelector((state) => state.global);

    return (
        <div className={cn(
            divCss,
            "w-full relative"
        )}>

            {label ? <label
                htmlFor={id}
                className={cn(
                    global.isDark ? 'text-gray-300' : 'text-gray-600',
                    "text-sm font-semibold px-1"
                )}
            >
                {label} {labelRequired ? <span className="text-error">*</span> : null}
            </label> : null}

            <div className="flex mt-0.5">
                {icon ? (
                    <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center relative top-[0.2rem]">
                        {icon}
                    </div>
                ) : null}

                <input
                    type={type}
                    name={id}
                    id={id}
                    className={cn(
                        inputCss,
                        error ?
                            'border-error focus:!border-error' :
                            'border-gray-200 hover:border-primary-100',

                        global.isDark ?
                            " border-secondary-200 bg-lightDark text-gray-300 hover:border-secondary-100 border disabled:bg-slate-700 disabled:border-slate-900" :
                            "text-gray-600 hover:border-gray-100 bg-white border-2 disabled:bg-gray-50 disabled:border-gray-100",

                        "w-full px-3 py-2 rounded-lg  focus:border-primary trans mt-1 outline-none disabled:border-gray-100 disabled:text-secondary-700 shadow-customInp"
                    )}
                    // autoComplete="off"
                    {...props}
                />
            </div>
            {error && (
                <span className="text-xs ml-1 text-error-hover absolute -bottom-5 left-0">
                    {error}
                </span>
            )}

            {passwordToggle && <div className="absolute top-[2.6rem] right-3.5">
                {showPassword ? <>
                    <AiOutlineEye
                        className={cn(
                            global.isDark ? "text-gray-100 hover:text-gray-200" : "text-gray-500 hover:text-gray-600",
                            " text-[22px] cursor-pointer  trans"
                        )}
                        onClick={() => setShowPassword && setShowPassword(false)}
                    />
                </> : <>
                    <AiOutlineEyeInvisible
                        className={cn(
                            global.isDark ? "text-gray-100 hover:text-gray-200" : "text-gray-500 hover:text-gray-600",
                            " text-[22px] cursor-pointer  trans"
                        )}
                        onClick={() => setShowPassword && setShowPassword(true)}
                    />
                </>}

            </div>}

        </div>
    );
};

export default Input;