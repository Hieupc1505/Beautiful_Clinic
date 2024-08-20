import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React from "react";
import Button from "../../components/Button";

interface BtnOptionsProps {
    icon: IconProp;
    content: string;
}
const BtnOption: React.FC<BtnOptionsProps> = ({ icon, content }) => {
    return (
        <Button
            sx="btn-options border-l-2 border-solid border-primary px-8 py-6 rounded-lg w-full flex items-center justify-start font-bold text-4xl text-thmTitle gap-8"
            startIcon={icon}
        >
            {content}
        </Button>
    );
};

export default BtnOption;
