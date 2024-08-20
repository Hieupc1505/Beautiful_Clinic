import { faClock, faComment, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
interface CardItemProps {
    img: string;
    title: string;
    sub: string;
}
const CardItem: React.FC<CardItemProps> = ({ img, title, sub }) => {
    return (
        <div className="card-item group">
            <div
                className="w-full bg-no-repeat bg-center bg-cover group-hover:filter group-hover:brightness-50"
                style={{
                    paddingBottom: "60%",
                    backgroundImage: `url('${img}')`,
                }}
            />
            <div className="flex flex-col gap-8">
                <div className="card-list-info flex gap-8 pt-12 ">
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon
                            className="text-primary"
                            icon={faUser}
                        />
                        <span className="text-xl text-thmp">Admin</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon
                            className="text-primary"
                            icon={faClock}
                        />
                        <span className="text-xl text-thmp">26 Oct 2023</span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <FontAwesomeIcon
                            className="text-primary"
                            icon={faComment}
                        />
                        <span className="text-xl text-thmp">1.5k</span>
                    </div>
                </div>
                <div className="divider w-full h-0.25 border-eeeeee border border-solid"></div>
                <div className="description flex flex-col gap-8">
                    <div className="text-thmTitle font-bold text-20px">
                        {title}
                    </div>
                    <div className="text-thmp text-15px text-justify leading-relaxed">
                        {sub}
                    </div>
                </div>
                <div className="text-thmBlack text-2xl txt-read-more relative cursor-pointer hover:text-primary self-start">
                    Read More
                </div>
            </div>
        </div>
    );
};

export default CardItem;
