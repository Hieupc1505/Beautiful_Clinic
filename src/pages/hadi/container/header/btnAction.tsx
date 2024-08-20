import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Button from "../../components/Button";

const BtnAction = () => {
    return (
        <div className="flex items-center gap-8 ml-10">
            <div className=" bg-primary w-14 h-14 text-white search-icon rounded-full flex items-center justify-center">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div className="">
                <Button sx="bg-primary text-white font-semibold px-4 py-4 rounded-lg outline-none text-18px">
                    Admission Now
                </Button>
            </div>
        </div>
    );
};

export default BtnAction;
