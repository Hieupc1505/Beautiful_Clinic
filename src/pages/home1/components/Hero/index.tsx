import React from "react";
import { Box } from "~/components/Box";
import HeroImage from "/Frame1.png";
import { Typography } from "~/components/Typography";
import Button from "~/components/Button";

const Hero = () => {
    return (
        <Box className="mainSlider dflex alignEnd">
            <Box className="heroBackground positionAbsolute"></Box>

            <Box className="heroWrapText">
                <Typography
                    variant="title"
                    color="primary"
                    size="xl"
                    className="textAlignLeft"
                >
                    Clinic & beauty consultant
                </Typography>
                <Typography
                    variant="text"
                    color="primary"
                    className="heroSubtitle"
                >
                    It is a long established fact that a reader will be by the
                    readable content of a page.
                </Typography>
                <Button variant="primary" size="xl">
                    More Details
                </Button>
            </Box>

            <Box className="heroImg">
                <img
                    src={HeroImage}
                    alt="Hero Image"
                    style={{ width: "100%", height: "auto" }}
                />
            </Box>
            <Box className="heroStep positionAbsolute dflex justifyCenter">
                <Box className="heroStepItem"></Box>
                <Box className="heroStepItem active"></Box>
                <Box className="heroStepItem"></Box>
            </Box>
        </Box>
    );
};

export default Hero;
