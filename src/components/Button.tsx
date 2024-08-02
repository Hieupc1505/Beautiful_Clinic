import React from "react";
import clsx from "clsx";
import styles from "~/assets/main.module.css";

interface ButtonProps {
    variant: string;
    children?: React.ReactNode;
    size?: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({
    variant,
    children,
    size = "md",
    className,
}) => {
    return (
        <button
            className={clsx(
                styles.button,
                styles[variant],
                styles[size],
                className?.split(" ").map((item) => styles[item])
            )}
        >
            {children}
        </button>
    );
};

export default Button;
