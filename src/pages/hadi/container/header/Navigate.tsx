import React from "react";
import ListItem from "./ListItem";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Navigate = () => {
    const navcontent = [
        "Home",
        "About",
        "Course",
        "Gallery",
        "Teacher",
        "Blog",
        "Contact",
    ];
    return (
        <nav className="nav-list flex gap-10 items-center ml-auto">
            {navcontent.map((item, index) => (
                <ListItem
                    content={item}
                    key={index}
                    endIcon={index == 0 && faChevronDown}
                />
            ))}
        </nav>
    );
};

export default Navigate;
