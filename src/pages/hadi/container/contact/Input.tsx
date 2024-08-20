import React from "react";
interface InputProps {
    placeholder: string;
    type?: string;
    sx?: string;
}
const Input: React.FC<InputProps> = ({ type = "text", placeholder, sx }) => {
    return (
        <div className="flex-1">
            <input
                type={type}
                className={`${sx} px-4 py-4 w-full`}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Input;
