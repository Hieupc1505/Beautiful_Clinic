import React from "react";

const FeatureInfo = () => {
    return (
        <div className="flex flex-col gap-6 items-center">
            <h3 className="ft-info-title font-bold text-4xl text-thmTitle">
                Welcom to <span className="text-primary">Hadi</span>
            </h3>
            <div className="text-center w-14 h-14">
                <img src="/hadi/favicon.png" />
            </div>
            <div className="text-thmp text-2xl max-w-screen-sm text-center">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text
            </div>
        </div>
    );
};

export default FeatureInfo;
