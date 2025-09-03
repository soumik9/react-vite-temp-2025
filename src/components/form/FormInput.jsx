import { cn } from '@src/libs/helper';

const FormInput = ({
    label, type = "text", error, id, ...props
}) => {
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-light-gray text-sm mb-1 font-medium"
            >
                {label}
            </label>
            <input
                id={id}
                type={type}
                className={cn(
                    "w-full px-4 py-3 rounded-lg bg-electroMagnetic text-light-gray border focus:outline-none focus:border-livid",
                    error ? "border-error" : "border-silver"
                )}
                {...props}
            />
            {error && (
                <p className="text-error text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    );
};

export default FormInput;