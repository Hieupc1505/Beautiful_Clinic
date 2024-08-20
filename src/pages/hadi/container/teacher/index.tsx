import React from "react";
import FeatureInfo from "../../components/FeatureInfo";
import TeacherItem from "./teacherItem";

const PopularTeacher = () => {
    const teachers = [
        {
            name: "John Math",
            role: "Senior Teacher",
            email: "Jonhnathan4@gtmith.com",
            img: "https://themesfamily.com/tm/hadi/assets/img/team/3.jpg",
        },
        {
            name: "Brain Jame",
            role: "AI Teacher",
            email: "BrainJameit@gtmith.com",
            img: "https://themesfamily.com/tm/hadi/assets/img/team/1.jpg",
        },
        {
            name: "Harry Kane",
            role: "Music Teacher",
            email: "musicisawasom@gtmith.com",
            img: "https://themesfamily.com/tm/hadi/assets/img/team/4.jpg",
        },
        {
            name: "EnKunKu Smith",
            role: "Automatic EA",
            email: "smithenkuk3@gtmith.com",
            img: "https://themesfamily.com/tm/hadi/assets/img/team/2.jpg",
        },
    ];
    return (
        <div className="container max-w-screen-xl mx-auto py-36">
            <FeatureInfo
                title={
                    <>
                        Our Popular{" "}
                        <span className="text-primary">Teacher</span>
                    </>
                }
                subtitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
                sxTitle="text-thmTitle text-28px"
            />
            <div className="grid grid-cols-4 gap-8 pt-32">
                {teachers.map(({ name, role, email, img }, idx) => (
                    <div className="cols-span-1" key={idx}>
                        <TeacherItem
                            name={name}
                            role={role}
                            email={email}
                            img={img}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopularTeacher;
