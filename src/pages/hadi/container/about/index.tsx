import React from "react";
import AboutInfo from "./info";
import SlideImg from "./slideImg";

const SectionAbout = () => {
    return (
        <section id="about" className="container max-w-screen-xl mx-auto">
            <div className="py-36 flex items-center justify-center gap-4">
                <AboutInfo />
                <SlideImg />
            </div>
        </section>
    );
};

export default SectionAbout;
