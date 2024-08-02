import React from "react";
import clsx from "clsx";
import styles from "~/assets/main.module.css";

interface TypographyProps {
    component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
    variant: string;
    children?: React.ReactNode; // Đảm bảo children được định nghĩa
    size?: "sm" | "md" | "lg" | "xl";
    color?: "primary" | "secondary" | "error" | "subtitle" | "contrast";
    className?: string;
}

const variantMapping: { [key: string]: React.ElementType } = {
    h1: "h1",
    h2: "h2",
    body1: "p",
    span: "span",
};

export const Typography: React.FC<TypographyProps> = ({
    variant,
    children,
    size = "md",
    color = "primary",
    component = "p",
    className,
}) => {
    const Component = variantMapping[component] || "p";

    return (
        <Component
            className={clsx(
                styles["typography"],
                styles[variant],
                styles[size],
                styles[color],
                className?.split(" ").map((item) => styles[item])
            )}
        >
            {children}
        </Component>
    );
};

// size &&
// styles[
//     `size${size.charAt(0).toUpperCase() + size.slice(1)}`
// ],
// color &&
// styles[
//     `color${color.charAt(0).toUpperCase() + color.slice(1)}`
// ]
