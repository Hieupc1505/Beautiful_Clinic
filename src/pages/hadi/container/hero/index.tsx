import React from "react";
import Button from "../../components/Button";

const Hero = () => {
    return (
        <section className="hero w-full relative flex items-center">
            <div className="w-full flex flex-col container max-w-screen-xl mx-auto gap-y-10">
                <div className=" flex items-center gap-6">
                    <div className="flex items-center justify-center">
                        <img src="/hadi/favicon.png" />
                    </div>
                    <div className="text-white font-bold text-2xl capitalize ">
                        We will teach you How to Learn
                    </div>
                </div>
                <div className="text-7xl uppercase text-white text-left font-bold leading-relaxed">
                    Best School & Anything to <br />
                    <span className="text-primary">Learn</span> Smart Way
                </div>
                <div className="text-white border-l-2 border-primary pl-4">
                    A Theme for Kids , Learning & Course etc.
                </div>
                <div className="flex items-center justify-start gap-6 ">
                    <Button sx="bg-thmBlack text-white rounded-lg capitalize px-8 py-4">
                        Discover More
                    </Button>
                    <Button sx="bg-primary text-white rounded-lg capitalize px-8 py-4">
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
