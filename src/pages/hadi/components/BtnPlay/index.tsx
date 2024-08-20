import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";
import React from "react";
interface BtnPlayProps {
    type: "md" | "lg" | "sm";
    sx?: string;
}
const BtnPlay: React.FC<BtnPlayProps> = ({ type = "md", sx }) => {
    const store = {
        lg: {
            box: "w-40 h-40",
            icon: "text-6xl",
        },
        md: { box: "w-32 h-32", icon: "text-4xl" },
        sm: { box: "w-18 h-18", icon: "text-3xl" },
    };
    return (
        <Box
            className={`flex items-center border-4 border-solid border-white rounded-full bg-primary justify-center ${
                store[type].box + " " + sx
            } inline-block`}
        >
            <FontAwesomeIcon
                className={`text-white ${store[type].icon}`}
                icon={faPlay}
            />
        </Box>
    );
};

export default BtnPlay;
