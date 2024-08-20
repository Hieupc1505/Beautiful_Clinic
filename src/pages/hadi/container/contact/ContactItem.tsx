import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface ContactItemProps {
    icon: IconProp;
    title: string;
    detail: string;
}
const ContactItem: React.FC<ContactItemProps> = ({ icon, title, detail }) => {
    return (
        <div className="flex items-center gap-8">
            <div className="flex items-center justify-center rounded-lg bg-primary p-6">
                <FontAwesomeIcon icon={icon} className="text-4xl text-white" />
            </div>
            <div className="flex flex-col gap-4">
                <div className="text-20px text-thmTitle font-bold">{title}</div>
                <div className="text-15px text-thmp">{detail}</div>
            </div>
        </div>
    );
};

export default ContactItem;
