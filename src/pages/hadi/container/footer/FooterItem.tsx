import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
interface FooterItemProps {
    title: string;
    data: string[];
}
const FooterItem: React.FC<FooterItemProps> = ({ title, data }) => {
    return (
        <>
            <Typography className="!text-bold !text-20px !text-white">
                {title}
            </Typography>
            <Box className="flex gap-2 items-center">
                <Box className="rounded-full w-2 h-2 bg-primary"></Box>
                <Box className="rounded-md w-12 h-1 bg-primary"></Box>
            </Box>
            <Stack direction={"column"} gap={1.5}>
                {data.map((item, index) => (
                    <Box
                        className="flex items-center justify-start gap-3"
                        key={index}
                    >
                        <FontAwesomeIcon
                            icon={faCaretRight}
                            className="!text-white"
                        />
                        <Typography className="!text-16px !text-white !font-semibold">
                            {item}
                        </Typography>
                    </Box>
                ))}
            </Stack>
        </>
    );
};

export default FooterItem;
