import React from "react";
interface FeatureCardProps {
    img: string;
    title: string;
    sub: string;
}
const FeatureCard: React.FC<FeatureCardProps> = ({ img, title, sub }) => {
    return (
        <div className="ft-card py-20 px-14 flex flex-col gap-12 flex-1">
            <div className="ft-card-img">
                <img src={img} className="w-full h-auto" />
            </div>
            <div className="font-bold text-3xl text-thmTitle">{title}</div>
            <div className="text-thmp text-2xl">{sub}</div>
            <div className="text-thmBlack text-2xl txt-read-more relative cursor-pointer hover:text-primary self-start">
                Read More
            </div>
        </div>
    );
};

export default FeatureCard;
