import React from "react";
import FeatureInfo from "../../components/FeatureInfo";
import CardItem from "./CardItem";

const News = () => {
    const news = [
        "Admission Going On Kids Center",
        "Good reason to Break..",
        "Best Kinder garden School",
    ];
    return (
        <div className="container max-w-screen-xl mx-auto py-36">
            <FeatureInfo
                title={
                    <>
                        Our <span className="text-primary">Recent</span> News
                    </>
                }
                sxTitle="text-thmTitle text-28px"
                subtitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
            />
            <div className="pt-32 grid grid-cols-3 gap-8">
                {news.map((title, idx) => (
                    <div className="cols-span-1" key={idx}>
                        <CardItem
                            img={`https://themesfamily.com/tm/hadi/assets/img/service/${
                                idx + 1
                            }.jpg`}
                            title={title}
                            sub="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi eligendi facilis itaque minus non odio, quaerat ullam under"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default News;
