import React from "react";
import Navigate from "./Navigate";
import Logo from "./Logo";
import BtnAction from "./btnAction";
import { useScrollTrigger } from "@mui/material";

const Header = () => {
    const trigger = useScrollTrigger({
        target: window,
        disableHysteresis: true,
        threshold: 90,
    });

    return (
        <header
            className={`z-50 ${
                trigger ? "bg-white sticky top-0" : "bg-transparent"
            }`}
        >
            <div className="flex items-center container max-w-screen-xl mx-auto py-4">
                <Logo />
                <Navigate />
                <BtnAction />
            </div>
        </header>
    );
};

export default Header;
