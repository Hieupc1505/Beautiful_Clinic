import { Box } from "~/components/Box";
import Button from "~/components/Button";
import { Typography } from "~/components/Typography";

const Header = () => {
    return (
        <Box component="header" className="headerWrap">
            <Box className="dflex ">
                <Box className="logo dflex alignCenter headerLogo">
                    <Box className="headerLogo positionRelative">
                        <Box className="bgPrimary boxCircle"></Box>
                        <Box className="positionAbsolute boxDot1"></Box>
                        <Box className="positionAbsolute boxDot2"></Box>
                        <Box className="positionAbsolute horizontal"></Box>
                    </Box>
                    <Typography
                        variant="logo"
                        color="primary"
                        className="textLogo"
                    >
                        Beautice
                    </Typography>
                </Box>
                <Box className="dflex justifyBetween alignCenter list hlist mlAuto">
                    <Typography
                        variant="text"
                        color="primary"
                        className="homeTxt positionRelative"
                    >
                        Home
                    </Typography>

                    <Typography variant="text" color="secondary">
                        About
                    </Typography>
                    <Typography variant="text" color="secondary">
                        Service
                    </Typography>
                    <Typography variant="text" color="secondary">
                        Gallery
                    </Typography>
                    <Typography variant="text" color="secondary">
                        Blog
                    </Typography>
                </Box>

                <Box className="btnHeader">
                    <Button variant="primary" size="md">
                        Contact
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;
