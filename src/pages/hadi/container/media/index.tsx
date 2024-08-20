import React from "react";
import FeatureInfo from "../../components/FeatureInfo";
import MediaItem from "./mediaItem";
import BtnPlay from "../../components/BtnPlay";

const SectionMedia = () => {
    const contents = [
        {
            title: "Multimedia Class",
            img: "/hadi/003-multimedia.png",
            sub: "It was popularised in the 1960s with the release of Letraset sheets containing .",
        },
        {
            title: "Education Facilities",
            img: "/hadi/002-academic-cap.png",
            sub: "It was popularised in the 1960s with the release of Letraset sheets containing .",
        },
        {
            title: "Music & Arts",
            img: "/hadi/001-guitar.png",
            sub: "It was popularised in the 1960s with the release of Letraset sheets containing .",
        },
    ];
    return (
        <section id="media" className="container max-w-screen-xl mx-auto">
            <div className="py-36">
                <BtnPlay type="md" />
                <FeatureInfo
                    title="Our Some Facilities"
                    subtitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
                    sxTitle="text-28px text-thmTitle"
                    sxSub="text-15px text-thmp"
                />
                <div className="grid grid-cols-2 gap-6 pt-32">
                    <div className="media-list space-y-6">
                        {contents.map(({ title, img, sub }, index) => (
                            <MediaItem
                                key={index}
                                title={title}
                                img={img}
                                sub={sub}
                                sxSub="text-15px text-thmp"
                                sxTitle="text-20px text-thmTitle"
                            />
                        ))}
                    </div>
                    <div className="social-media grid grid-cols-2 gap-5">
                        <div className="bg-red-500 col-span-2 relative">
                            <Box>
                                <BtnPlay
                                    type="md"
                                    sx="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hover:cursor-pointer z-10"
                                />
                                <span className="w-40 h-40 bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-1 opacity-75"></span>
                            </Box>
                            <img
                                src="https://themesfamily.com/tm/hadi/assets/img/about/about-3.jpg"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="bg-blue-500 col-span-1">
                            <img
                                src="https://themesfamily.com/tm/hadi/assets/img/about/about-2.jpg"
                                className="w-full h-auto"
                            />
                        </div>
                        <div className="bg-blue-500 col-span-1">
                            <img
                                src="https://themesfamily.com/tm/hadi/assets/img/about/about-1.jpg"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default SectionMedia;
