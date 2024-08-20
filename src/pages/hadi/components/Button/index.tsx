import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

// Khai báo kiểu cho props
interface BtnProps {
    size?: "sm" | "lg" | "xl" | "md";
    children: React.ReactNode;
    sx: string;
    endIcon?: IconProp | false;
    startIcon?: IconProp | false;
}

// Functional Component
const Button: React.FC<BtnProps> = ({ children, sx, endIcon, startIcon }) => {
    return (
        <button className={`${sx}`}>
            {startIcon && <FontAwesomeIcon icon={startIcon} />}

            <span>{children}</span>
            {endIcon && <FontAwesomeIcon icon={endIcon} />}
        </button>
    );
};

export default Button;
