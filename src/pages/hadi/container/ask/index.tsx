import React from "react";
import AccordionUsage from "./expandItem";

const Ask = () => {
    return (
        <div className="bg-thmgrey py-36">
            <div className="max-w-screen-xl mx-auto ">
                <div className="flex justiy-center gap-8 flex-col text-center items-center">
                    <div className="text-28px text-thmTitle font-bold">
                        Frequently <span className="text-primary">Asked</span>{" "}
                        Question
                    </div>
                    <div className="text-15px text-thmp w-4/6">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                    </div>
                    <div className="flex flex-col">
                        <AccordionUsage />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ask;
