import React from "react";
import { useSelector } from "react-redux";
import CircleLoading from "../Icons/CircleLoading";
import { cn } from "@src/libs/hooks";

const SecondaryButton = ({ type = 'submit', loadingText, isLoading, text, variant = false, css, startIcon, endIcon, ...props }) => {

    // *global
    const global = useSelector((state) => state.global);

    return (
        <button
            type={type}
            className={cn(
                "trans h-[50px] disabled:text-gray-200 rounded-lg text-base outline-none capitalize w-full md:w-max md:px-6 font-semibold tracking-wide disabled:bg-slate-400",

                global.isDark ? 'bg-livid hover:bg-secondary' : 'bg-blueNight hover:bg-lightDark',
                variant ? 'bg-transparent border-2 hover:text-white' : 'text-white',
                (variant && global.isDark) && 'border-livid text-livid',
                (variant && !global.isDark) && 'border-blueNight text-blueNight',

                (isLoading || startIcon || endIcon) && '!text-white flex items-center justify-center',
                ((startIcon || endIcon) && !isLoading) && 'gap-1.5',

                css
            )}
            disabled={isLoading}
            {...props}
        >
            {isLoading && <CircleLoading />}
            {(startIcon && !isLoading) && startIcon}
            {(loadingText && isLoading) && loadingText}
            {(!loadingText && !isLoading) && text}
            {(endIcon && !isLoading) && endIcon}
        </button>
    );
};

export default SecondaryButton;