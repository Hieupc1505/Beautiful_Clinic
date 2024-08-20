import React from "react";
interface MediaItemProp {
    img: string;
    title: string;
    sub: string;
    sxTitle?: string;
    sxSub?: string;
}
const MediaItem: React.FC<MediaItemProp> = ({
    img,
    title,
    sub,
    sxTitle,
    sxSub,
}) => {
    return (
        <div className="flex items-center justify-center p-8 gap-8 media-item">
            <div>
                <img src={img} className="w-full h-auto" />
            </div>
            <div className="flex flex-col gap-7">
                <div className={`text-thmTitle text-20px ${sxTitle}`}>
                    {title}
                </div>
                <div className={`text-thmp text-15px ${sxSub}`}>{sub}</div>
            </div>
        </div>
    );
};

export default MediaItem;
