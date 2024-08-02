import React from "react";
import clsx from "clsx";
import styles from "~/assets/main.module.css";

interface BoxProps {
    component?:
        | "div"
        | "section"
        | "header"
        | "footer"
        | "form"
        | "table"
        | "ul";

    children?: React.ReactNode; // Đảm bảo children được định nghĩa
    bgColor?: string;
    className?: string;
    ref?: React.Ref<HTMLDivElement>;
}

const variantMapping: { [key: string]: React.ElementType } = {
    div: "div",
    section: "section",
    header: "header",
    footer: "footer",
    form: "form",
    table: "table",
    ul: "ul",
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
    const { children, component = "div", className } = props;
    const Component = variantMapping[component] || "div";

    return (
        <Component
            ref={ref}
            className={clsx(
                styles["box"],
                className?.split(" ").map((item) => styles[item])
            )}
        >
            {children}
        </Component>
    );
});

// size &&
// styles[
//     `size${size.charAt(0).toUpperCase() + size.slice(1)}`
// ],
// color &&
// styles[
//     `color${color.charAt(0).toUpperCase() + color.slice(1)}`
// ]
