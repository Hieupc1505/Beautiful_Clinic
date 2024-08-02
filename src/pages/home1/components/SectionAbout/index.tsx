import { Box } from "~/components/Box";
import Button from "~/components/Button";
import { Typography } from "~/components/Typography";
import PlayIcon from "/play.svg";
import Buble from "/buble.png";

const SectionAbout = () => {
    return (
        <Box className="aboutWrap dflex positionRelative">
            <Box className="dflex alignEnd">
                <Box className="dflex directionColumn aboutWrapContent alignStart">
                    <Typography
                        className="textAlignLeft"
                        variant="text"
                        color="subtitle"
                        size="md"
                    >
                        About Us
                    </Typography>
                    <Typography
                        className="textAlignLeft"
                        variant="title"
                        color="primary"
                        size="lg"
                    >
                        We are the best beauty clinic
                    </Typography>
                    <Box className="boxAboutWrapText">
                        <Typography
                            component="p"
                            className="textAlignLeft "
                            variant="text"
                            color="secondary"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Elit, quam suscipit purus donec amet. Egestas
                            volutpat facilisi eu libero. Nunc, ipsum ornare
                            mauris sit quam quis enim. Varius tellus in
                            suspendisse placerat.
                        </Typography>
                        <Typography
                            component="p"
                            className="textAlignLeft "
                            variant="text"
                            color="secondary"
                        >
                            Id dui erat sed quam tellus in purus. Pellentesque
                            congue fringilla cras tellus enim.
                        </Typography>
                    </Box>
                    <Box className="dflex aboutWrapNav">
                        <Button variant="primary" size="lg">
                            Learn More
                        </Button>
                        <Box className="dflex">
                            <Box className="play button dflex alignCenter justifyCenter buttonPlay">
                                <img
                                    src={PlayIcon}
                                    width={"20.42px"}
                                    height={"20.42px"}
                                    alt=""
                                />
                            </Box>
                            <Typography
                                variant="text"
                                color="secondary"
                                size="md"
                            >
                                Watch Videos
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box className="aboutWrapImage"></Box>
            </Box>
            <Box className="positionAbsolute aboutWrapImg">
                <img src={Buble} width={"100%"} height={"100%"} alt="" />
            </Box>
        </Box>
    );
};

export default SectionAbout;
