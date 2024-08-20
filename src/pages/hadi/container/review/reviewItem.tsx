import React from "react";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ReviewItem = ({ item }: { item: number }) => {
    return (
        <div className="review-card col-span-1 border-eeeeee bg-white px-28 flex justify-center flex-col items-center gap-12 pb-10">
            <div className="review-card-img">
                <img
                    src={`https://themesfamily.com/tm/hadi/assets/img/client/img-${item}.jpg`}
                    className="w-full h-auto"
                />
            </div>
            <div className="italic text-14px text-thmp text-center">
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem
                commodi eligendi facilis itaque minus non odio, quaerat ullam
                under"
            </div>
            <div className="text-20px font-bold text-thmTitle">
                Abdul Hamid
                <div
                    className="divider-rv w-1/5 mx-auto h-0.5"
                    style={{ background: "#d3d3d3" }}
                />
            </div>

            <div className="text-16px text-thmp">Senior Teacher</div>
            <div className="flex justify-center gap-6 text-primary">
                <FontAwesomeIcon className="text-priamry" icon={faStar} />
                <FontAwesomeIcon className="text-priamry" icon={faStar} />
                <FontAwesomeIcon className="text-priamry" icon={faStar} />
            </div>
        </div>
    );
};

export default ReviewItem;
