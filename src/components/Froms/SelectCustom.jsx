import { cn } from '@src/libs/hooks';
import React from 'react'
import { useSelector } from 'react-redux';
import Select from 'react-select';

const SelectCustom = ({
    label, options, defaultValue, onChange, value, id, placeHolder, isSearchable = false, labelRequired, required, isLoading, error, divCss
}) => {

    // *global
    const global = useSelector((state) => state.global);

    // *select global style
    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            minHeight: '44px',
            background: global.isDark ? '#1A1826' : '',
            border: state.menuIsOpen || state.isFocused &&
                error ? "2px solid #F04438" : global.isDark ? "2px solid #192a56" : "2px solid #E5E7EB",
            borderRadius: '8px',
            cursor: 'pointer',
            outline: 'none',
            transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:focus': {
                borderColor: error ? "#F04438" : '#4a69bd',
                boxShadow: state.menuIsOpen || state.isFocused ? 'inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(150, 149, 202, 1)' : 'none',
            },
            '&:hover': {
                borderColor: error ? "#F04438" : '#4a69bd',
            },
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isSelected ? '#4a69bd' : 'transparent',
            color: state.isSelected ? 'white' : '#6B7280',
            cursor: 'pointer',
            transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            '&:hover': {
                backgroundColor: state.isSelected ? '#4a69bd' : '#e5e7eb',
                color: state.isSelected ? 'white' : '#4B5563'
            }
        }),
        singleValue: (provided) => ({
            ...provided,
            color: global.isDark ? '#d1d5db' : "#6B7280", // *on dark mode the color is for tailwind 'text-gray-300'
        }),
        dropdownIndicator: base => ({
            ...base,
            '&:hover': {
                color: "#d7d9f3",
            }
        }),
    };

    return (
        <div className={cn(
            divCss, "mt-0.5 scrollbar relative"
        )}>

            {label ? <label
                htmlFor={id}
                className={cn(
                    global.isDark ? 'text-gray-300' : 'text-gray-600',
                    "text-sm font-semibold px-1 "
                )}
            >
                {label} {labelRequired ? <span className="text-error">*</span> : null}
            </label> : null}

            <div className="mt-1 ">
                <Select
                    options={options}
                    defaultValue={defaultValue}
                    value={value}
                    onChange={onChange}
                    styles={customStyle}
                    isSearchable={isSearchable}
                    placeholder={placeHolder}
                    className='w-full capitalize trans'
                    required={required}
                    isLoading={isLoading}
                />
            </div>

            {error && (
                <span className="text-xs ml-1 text-error-hover absolute -bottom-5 left-0">
                    {error}
                </span>
            )}

        </div>
    )
}

export default SelectCustom