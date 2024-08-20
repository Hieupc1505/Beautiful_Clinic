import React from "react";
interface TeacherItemProps {
    img: string;
    name: string;
    role: string;
    email: string;
}
const TeacherItem: React.FC<TeacherItemProps> = ({
    img,
    name,
    role,
    email,
}) => {
    return (
        <div className="teacher-card">
            <div
                className="w-full bg-red bg-no-repeat bg-cover bg-center"
                style={{
                    paddingBottom: "100%",
                    backgroundImage: `url("${img}")`,
                }}
            ></div>
            <div className="flex flex-col gap-8 items-center justify-center px-10 py-8">
                <div className="uppercase font-bold text-18px text-thmBlack">
                    {name}
                </div>
                <div className="text-xl text-thmp">{role}</div>
                <div className="text-xl text-thmp font-normal">
                    Email: <span className="font-bold">{email}</span>
                </div>
            </div>
        </div>
    );
};

export default TeacherItem;
