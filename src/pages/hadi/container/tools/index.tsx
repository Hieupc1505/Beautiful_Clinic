import React from "react";
import ToolItem from "./ToolItem";

const Tools = () => {
    return (
        <div className="bg-thmgrey py-36">
            <div className="container mx-auto max-w-screen-xl flex gap-8">
                <ToolItem img="https://themesfamily.com/tm/hadi/assets/img/partner/5.jpg" />
                <ToolItem img="https://themesfamily.com/tm/hadi/assets/img/partner/4.jpg" />
                <ToolItem img="https://themesfamily.com/tm/hadi/assets/img/partner/3.jpg" />
                <ToolItem img="https://themesfamily.com/tm/hadi/assets/img/partner/2.jpg" />
                <ToolItem img="https://themesfamily.com/tm/hadi/assets/img/partner/1.jpg" />
            </div>
        </div>
    );
};

export default Tools;
