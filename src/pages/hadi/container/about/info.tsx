import React from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import BtnOption from "./BtnOption";
import Button from "../../components/Button";
import { v4 as uuidv4 } from "uuid";

const AboutInfo = () => {
    const options = [
        "Learn to Pay",
        "Best Quality",
        "Safe and Security",
        "Nice Environment",
    ];
    return (
        <div className="flex-1 flex flex-col gap-10 px-5 pb-24">
            <div className="about-title text-5xl font-bold txt-shadow leading-normal">
                Learn to work School{" "}
                <span className="text-primary">Activities</span> Good Solution
                of Kids in the world
            </div>
            <div className="text-2xl text-thmp leading-snug">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle of
                text.
            </div>
            <div className="grid grid-cols-2 gap-12">
                {options.map((item) => (
                    <BtnOption key={uuidv4()} icon={faCheck} content={item} />
                ))}
            </div>
            <div>
                <Button sx="bg-primary text-white px-8 py-4 rounded-lg">
                    About Us
                </Button>
            </div>
        </div>
    );
};

export default AboutInfo;
