import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useScrollTrigger } from "@mui/material";
import React from "react";

interface ListItemProps {
    content: string;
    endIcon?: IconProp | false;
}

const ListItem: React.FC<ListItemProps> = ({ content, endIcon = false }) => {
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 90,
    });
    return (
        <div
            className={`py-10 text-3xl hover:text-primary cursor-pointer flex items-center justify-center gap-2 ${
                trigger ? "text-thmTitle" : "text-white"
            }`}
        >
            <div>{content}</div>
            {endIcon && <FontAwesomeIcon icon={endIcon} />}
        </div>
    );
};

export default ListItem;
