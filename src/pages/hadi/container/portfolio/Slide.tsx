import { Avatar } from "@mui/material";
import React from "react";
import Slider from "react-slick";
const SlideT = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <></>,
        prevArrow: <></>,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
    };

    return (
        <Slider {...settings}>
            {Array.from({ length: 5 }).map((it, idx) => (
                <div className="mx-6 h-auto w-full flow-root " key={idx}>
                    <Avatar
                        src={`https://themesfamily.com/tm/hadi/assets/img/portfolio/${
                            idx + 1
                        }.jpg`}
                        className="w-full h-auto"
                        sx={{ width: "100%", height: "auto" }}
                        variant="square"
                    />
                </div>
            ))}
        </Slider>
    );
};

export default SlideT;
