import React from "react";
interface FeatureInfoProps {
    title: React.ReactNode;
    subtitle: string;
    sxTitle?: string;
    sxSub?: string;
}
const FeatureInfo: React.FC<FeatureInfoProps> = ({
    title,
    subtitle,
    sxTitle = "text-4xl",
    sxSub = "text-2xl",
}) => {
    return (
        <div className="flex flex-col gap-6 items-center">
            <h3 className={`ft-info-title font-bold text-thmTitle ${sxTitle}`}>
                {title}
            </h3>
            <div className="text-center w-14 h-14">
                <img src="/hadi/favicon.png" />
            </div>
            <div className={`text-thmp max-w-screen-sm text-center ${sxSub}`}>
                {subtitle}
            </div>
        </div>
    );
};

export default FeatureInfo;
