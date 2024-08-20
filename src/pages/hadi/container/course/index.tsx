import React from "react";
import FeatureInfo from "../../components/FeatureInfo";
import CourseItem from "./CourseItem";

const Course = () => {
    const courses = [
        {
            img: "https://themesfamily.com/tm/hadi/assets/img/service/2.jpg",
            name: "Campus Clean work on the student",
            subtitle:
                " It was popularised in the 1960s with the release of Letraset sheets.",
            authorImg:
                "https://themesfamily.com/tm/hadi/assets/img/client/img-3.jpg",
            authorName: "Abdul Mushi",
            price: 46,
        },
        {
            img: "https://themesfamily.com/tm/hadi/assets/img/service/4.jpg",
            name: "Basic English Speaking and Grammar",
            subtitle:
                "It was popularised in the 1960s with the release of Letraset sheets.",
            authorImg:
                "https://themesfamily.com/tm/hadi/assets/img/client/img-1.jpg",
            authorName: "Minn Kimos",
            price: 30,
        },
        {
            img: "https://themesfamily.com/tm/hadi/assets/img/service/2.jpg",
            name: "Campus Clean work on the student",
            subtitle:
                " It was popularised in the 1960s with the release of Letraset sheets.",
            authorImg:
                "https://themesfamily.com/tm/hadi/assets/img/client/img-2.jpg",
            authorName: "Abdul Mushi",
            price: 51,
        },
    ];
    return (
        <div className="py-36 bg-thmgrey">
            <div className="container max-w-screen-xl mx-auto">
                <FeatureInfo
                    title={
                        <>
                            Our Popular{" "}
                            <span className="text-primary">Course</span>
                        </>
                    }
                    subtitle="Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text"
                    sxTitle="text-28px font-bold text-thmTitle"
                    sxSub="text-thmp text-15px"
                />
                <div className="pt-32 flex items-center gap-10">
                    {courses.map(
                        (
                            {
                                img,
                                name,
                                subtitle,
                                authorImg,
                                authorName,
                                price,
                            },
                            idx
                        ) => (
                            <CourseItem
                                img={img}
                                name={name}
                                subtitle={subtitle}
                                authorImg={authorImg}
                                authorName={authorName}
                                price={price}
                                key={idx}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Course;
