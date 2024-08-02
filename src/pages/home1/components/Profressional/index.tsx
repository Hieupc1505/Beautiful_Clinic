import { Box } from "~/components/Box";
import { Typography } from "~/components/Typography";
import Ava0 from "/av0.jpg";
import Ava1 from "/av1.jpg";
import Ava2 from "/av2.jpg";
import twitter from "/twitter.svg";
import facebook from "/facebook-f.svg";
import insta from "/instagram.svg";

const Profressional = () => {
    return (
        <Box className="pro">
            <Box className="dflex directionColumn">
                <Box className="proDescription dflex alignCenter directionColumn">
                    <Typography variant="text" size="md" color="subtitle">
                        Professional Teams
                    </Typography>
                    <Typography
                        variant="title"
                        size="lg"
                        color="primary"
                        className="proTitle"
                    >
                        The Professional expert
                    </Typography>
                    <Typography variant="text" color="secondary" size="md">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        ut aliquam.
                    </Typography>
                </Box>
            </Box>
            <Box className="dflex proCardList">
                <Box className="proCard dflex directionColumn">
                    <Box className="proCardImg">
                        <img src={Ava0} width={"100%"} height={"100%"} alt="" />
                    </Box>
                    <Box className="proCardDes">
                        <Typography variant="text" color="subtitle">
                            Surgeon
                        </Typography>
                        <Typography
                            variant="title"
                            color="primary"
                            size="md"
                            className="proCardItemTitle"
                        >
                            Briyan Nevalli
                        </Typography>
                        <Typography
                            variant="text"
                            color="secondary"
                            size="md"
                            className="textAlignCenter"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit
                        </Typography>
                    </Box>
                    <Box className="dflex proCardSocial">
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={twitter}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={facebook}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={insta}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="proCard middle dflex directionColumn">
                    <Box className="proCardImg">
                        <img src={Ava1} width={"100%"} height={"100%"} alt="" />
                    </Box>
                    <Box className="proCardDes">
                        <Typography variant="text" color="subtitle">
                            Dermatologist
                        </Typography>
                        <Typography
                            variant="title"
                            color="primary"
                            size="md"
                            className="proCardItemTitle"
                        >
                            Bella sebastian
                        </Typography>
                        <Typography
                            variant="text"
                            color="secondary"
                            size="md"
                            className="textAlignCenter"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit
                        </Typography>
                    </Box>
                    <Box className="dflex proCardSocial">
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={twitter}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={facebook}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={insta}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                    </Box>
                </Box>
                <Box className="proCard dflex directionColumn">
                    <Box className="proCardImg">
                        <img src={Ava2} width={"100%"} height={"100%"} alt="" />
                    </Box>
                    <Box className="proCardDes">
                        <Typography variant="text" color="subtitle">
                            Stylist expert
                        </Typography>
                        <Typography
                            variant="title"
                            color="primary"
                            size="md"
                            className="proCardItemTitle"
                        >
                            Lilly Adams
                        </Typography>
                        <Typography
                            variant="text"
                            color="secondary"
                            size="md"
                            className="textAlignCenter"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit
                        </Typography>
                    </Box>
                    <Box className="dflex proCardSocial">
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={twitter}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={facebook}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                        <Box className="button play icon dflex alignCenter justifyCenter">
                            <img
                                src={insta}
                                width={"25px"}
                                height={"25px"}
                                alt=""
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Profressional;
