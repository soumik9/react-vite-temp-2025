
import React from "react";
import { useSelector } from "react-redux";
import { cn } from "@src/libs/hooks";
import CircleLoading from "../Icons/CircleLoading";

const PrimaryButton = ({ type = 'submit', loadingText = '', isLoading, text, variant = false, css, startIcon, endIcon, ...props }) => {

    // *global
    const global = useSelector((state) => state.global);

    return (
        <button
            type={type}
            className={cn(
                "trans h-[50px] disabled:text-gray-200 rounded-lg text-base outline-none capitalize w-full md:w-max md:px-6 font-semibold tracking-wide cursor-pointer",

                global.isDark ? 'bg-livid hover:bg-secondary disabled:bg-slate-400' : 'bg-secondary hover:bg-primary disabled:bg-livid',
                variant ? 'bg-transparent border-2 hover:text-white' : 'text-white',
                (variant && global.isDark) && 'border-livid text-livid',
                (variant && !global.isDark) && 'border-secondary text-secondary',

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

export default PrimaryButton;