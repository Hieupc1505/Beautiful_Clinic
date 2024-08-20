import React from "react";
// import FeatureInfo from "./featureInfo";
import FeatureInfo from "../../components/FeatureInfo";
import FeatureCard from "./featureCard";

const Feature = () => {
    const cardStore = [
        {
            img: "/hadi/001-teacher.png",
            title: "Best Teacher",
            sub: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
        },
        {
            img: "/hadi/002-award.png",
            title: "Certificate to World",
            sub: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
        },
        {
            img: "/hadi/003-programming.png",
            title: "Good Program",
            sub: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
        },
        {
            img: "/hadi/004-student.png",
            title: "Student Service",
            sub: "Lorem ipsum dolor sit amet elit consectetur adipiscing sed eiusmod tempor.",
        },
    ];
    return (
        <div className="py-36 container max-w-screen-xl mx-auto">
            <FeatureInfo
                title={
                    <>
                        Welcom to <span className="text-primary">Hadi</span>
                    </>
                }
                subtitle={`Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text`}
            />
            <div className="flex items-center justify-between gap-12 pt-28">
                {cardStore.map((item, index) => (
                    <FeatureCard
                        title={item.title}
                        sub={item.sub}
                        img={item.img}
                        key={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default Feature;
