import React from "react";
interface CourseItemProps {
    img: string;
    name: string;
    subtitle: string;
    authorImg: string;
    authorName: string;
    price: number;
}
const CourseItem: React.FC<CourseItemProps> = ({
    img,
    name,
    subtitle,
    authorImg,
    authorName,
    price,
}) => {
    return (
        <div className="flex-1 border border-solid border-eeeeee bg-white">
            <div className="course-img w-full">
                <img src={img} className="w-full h-auto" />
            </div>
            <div className="py-10 pl-10 pr-14 flex flex-col gap-10">
                <div className="text-24px text-thmTitle">{name}</div>
                <div className="text-15px text-thmp leading-normal">
                    {subtitle}
                </div>
                <div className="text-primary italic font-semibold">
                    Mon-Fri : 9am-11am
                </div>
                <div className="flex items-center justify-start gap-4">
                    <div
                        className="rounded-full overflow-hidden"
                        style={{ width: "60px", height: "60px" }}
                    >
                        <img src={authorImg} className="w-full h-auto" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="text-thmTitle text-20px">
                            {authorName}
                        </div>
                        <div className="text-16px font-bold">
                            Price: <span className="font-normal">${price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseItem;
