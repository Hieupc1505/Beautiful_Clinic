import React from "react";
// import FooterImg from '/footer.png'
import { Box } from "~/components/Box";
import { Typography } from "~/components/Typography";
import twitter from "/twit.png";
import facebook from "/fb.png";
import insta from "/inta.png";
import youtube from "/youtube.png";
import linkin from "/linkin.png";
import right from "/right.svg";
const Footer = () => {
    const right1 = ["Home", "About", "Service", "Gallery", "Team"];
    const right2 = ["Terms & conditions", "Privacy policy", "Blog", "Contact"];
    return (
        <Box component="footer" className="positionRelative">
            <Box className="footer">
                <Box className="dflex footerLayout">
                    <Box className="footerItem footerLogo">
                        <Box className="logo dflex alignCenter headerLogo">
                            <Box className="headerLogo positionRelative">
                                <Box className="bgPrimary boxCircle"></Box>
                                <Box className="positionAbsolute boxDot1"></Box>
                                <Box className="positionAbsolute boxDot2"></Box>
                                <Box className="positionAbsolute horizontal bgContrast"></Box>
                            </Box>
                            <Typography
                                variant="logo"
                                color="contrast"
                                className="textLogo"
                                component="span"
                            >
                                Beautice
                            </Typography>
                        </Box>

                        <Typography variant="logo" className="footerTextCus">
                            Beautice
                            <Typography
                                component="span"
                                variant="footer"
                                className="text"
                            >
                                {" "}
                                is a Beauty Clinic WordPress Theme.
                            </Typography>
                        </Typography>
                        <Box>
                            <Typography
                                variant="footer"
                                className="text italic"
                            >
                                Baker Steet 101, NY, United States.
                            </Typography>
                            <Box className="dflex mail">
                                <Typography
                                    variant="footer"
                                    className="text italic"
                                >
                                    +521 569 8966.
                                </Typography>
                                <Typography
                                    variant="footer"
                                    className="text italic lineThrough"
                                >
                                    mail@company.com.
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className="footerItemMain2 padding">
                        <Typography
                            variant="footer"
                            className="title textAlignLeft"
                        >
                            Page
                        </Typography>
                        <Box className="dflex directionColumn listPage">
                            {right1.map((item, index) => (
                                <Box
                                    key={index}
                                    className="dflex alignCenter gap16"
                                >
                                    <img
                                        src={right}
                                        width={"13px"}
                                        height={"13px"}
                                        alt=""
                                    />
                                    <Typography
                                        variant="footer"
                                        className="text textAlignLeft"
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                    <Box className="footerItemMain2">
                        <Typography
                            variant="footer"
                            className="title textAlignLeft"
                        >
                            Infomation
                        </Typography>
                        <Box className="dflex directionColumn listPage">
                            {right2.map((item, index) => (
                                <Box
                                    key={index}
                                    className="dflex alignCenter gap16"
                                >
                                    <img
                                        src={right}
                                        width={"13px"}
                                        height={"13px"}
                                        alt=""
                                    />
                                    <Typography
                                        variant="footer"
                                        className="text textAlignLeft"
                                    >
                                        {item}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className="dflex footerSocial positionAbsolute">
                <Box className="dflex nav">
                    <Box className="item">
                        <img
                            src={twitter}
                            width={"100%"}
                            height={"100%"}
                            alt="twitter"
                        />
                    </Box>
                    <Box className="item">
                        <img
                            src={facebook}
                            width={"100%"}
                            height={"100%"}
                            alt="twitter"
                        />
                    </Box>
                    <Box className="item">
                        <img
                            src={insta}
                            width={"100%"}
                            height={"100%"}
                            alt="twitter"
                        />
                    </Box>
                    <Box className="item">
                        <img
                            src={youtube}
                            width={"100%"}
                            height={"100%"}
                            alt="twitter"
                        />
                    </Box>
                    <Box className="item">
                        <img
                            src={linkin}
                            width={"100%"}
                            height={"100%"}
                            alt="twitter"
                        />
                    </Box>
                </Box>
                <Box>
                    <Typography variant="footer" className="text">
                        © AltDesain Studio 2021 - All right reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;
