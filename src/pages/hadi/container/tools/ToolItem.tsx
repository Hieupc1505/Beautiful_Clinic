import React from "react";

const ToolItem = ({ img }: { img: string }) => {
    return (
        <div className="flex-1">
            <img src={img} className="w-full h-auto" />
        </div>
    );
};

export default ToolItem;
