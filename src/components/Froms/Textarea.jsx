import { cx } from "@/utils/hooks/helper";
import React from "react";
import { useSelector } from "react-redux";

const Textarea = ({ label, id, placeholder, onChange, required, error, inputCss, value, disabled, divCss }) => {

    // *global
    const global = useSelector((state) => state.global);

    return (
        <div className={cx(divCss, "w-full relative")}>
            <label htmlFor={id} className={cx(
                global.isDark ? 'text-gray-300' : 'text-gray-600',
                "text-sm font-semibold px-1"
            )}>
                {label} {required ? <span className="text-error">*</span> : null}
            </label>

            <textarea
                id={id}
                name={id}
                className={cx(
                    inputCss,
                    error ?
                        'border-error focus:!border-error' :
                        'border-gray-200 hover:border-primary-100',

                    global.isDark ?
                        " border-secondary-200 bg-lightDark text-gray-300 hover:border-secondary-100 border disabled:bg-slate-700 disabled:border-slate-900" :
                        "text-gray-600 hover:border-gray-100 bg-white border-2 disabled:bg-gray-50 disabled:border-gray-100",

                    "w-full px-3 py-2 rounded-lg  focus:border-primary trans mt-1 outline-none disabled:border-gray-100 disabled:text-secondary-700 shadow-customInp resize-none"
                )}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                required={required}
                disabled={disabled}
                rows={5}
            />

            {/* {error && <span className="text-xs ml-1 text-error-hover absolute -bottom-5 left-0">hello</span>} */}
        </div>
    );
};

export default Textarea;