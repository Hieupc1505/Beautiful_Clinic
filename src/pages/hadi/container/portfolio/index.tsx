import React from "react";
import FeatureInfo from "../../components/FeatureInfo";
import SlideT from "./Slide";
const Portfolio = () => {
    return (
        <div className="py-36">
            <div className="container max-w-screen-xl mx-auto">
                <FeatureInfo
                    title={
                        <>
                            Our <span className="text-primary">Portfolio</span>
                        </>
                    }
                    sxTitle="font-bold text-28px text-thmTitle txt-shadow"
                    subtitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
                />
            </div>
            <div className="slider-container mt-32">
                <SlideT />
            </div>
        </div>
    );
};

export default Portfolio;
