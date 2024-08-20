import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLaptop,
    faVolleyball,
    faAnchor,
    faUmbrellaBeach,
} from "@fortawesome/free-solid-svg-icons";
import FooterItem from "./FooterItem";
import { Avatar } from "@mui/material";

const Footer = () => {
    const dataItem1 = [
        "Get Start",
        "Our Team",
        "About Us",
        "Need Helps",
        "Contact Us",
    ];
    const dataItem2 = [
        "Build Web",
        "Build API",
        "Maintain System",
        "Database",
        "Contact Us",
    ];
    return (
        <footer className="bg-thmBlack py-36">
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item sm={4} className="space-y-10">
                        <Typography className="!text-20px !text-white !font-bold">
                            Hadi Learn
                        </Typography>
                        <Box className="flex gap-2 items-center">
                            <Box className="rounded-full w-2 h-2 bg-primary"></Box>
                            <Box className="rounded-md w-12 h-1 bg-primary"></Box>
                        </Box>
                        <Typography className="!text-white !text-15px">
                            Lorem ipsum dolor sit amet consectetur adipiscing
                            elit sed eiusmod dolor.
                        </Typography>
                        <Typography className="!text-24px !text-white">
                            Follow Us
                        </Typography>
                        <Stack direction={"row"} gap={1.5}>
                            <Box className="flex items-center justify-center bg-primary p-5 rounded-full">
                                <FontAwesomeIcon
                                    className="text-white"
                                    icon={faLaptop}
                                />
                            </Box>
                            <Box className="flex items-center justify-center bg-primary p-5 rounded-full">
                                <FontAwesomeIcon
                                    className="text-white"
                                    icon={faVolleyball}
                                />
                            </Box>
                            <Box className="flex items-center justify-center bg-primary p-5 rounded-full">
                                <FontAwesomeIcon
                                    className="text-white"
                                    icon={faUmbrellaBeach}
                                />
                            </Box>
                            <Box className="flex items-center justify-center bg-primary p-5 rounded-full">
                                <FontAwesomeIcon
                                    className="text-white"
                                    icon={faAnchor}
                                />
                            </Box>
                        </Stack>
                    </Grid>
                    <Grid item sm={2} className="space-y-10">
                        <FooterItem data={dataItem1} title="Quick Links" />
                    </Grid>
                    <Grid item sm={2} className="space-y-10">
                        <FooterItem data={dataItem2} title="Our Services" />
                    </Grid>
                    <Grid item sm={4} className="space-y-10">
                        <Typography className="!text-20px !text-white !font-bold">
                            Hadi Learn
                        </Typography>
                        <Box className="flex gap-2 items-center">
                            <Box className="rounded-full w-2 h-2 bg-primary"></Box>
                            <Box className="rounded-md w-12 h-1 bg-primary"></Box>
                        </Box>
                        <Box className="flex flex-wrap gap-4">
                            <Avatar
                                sx={{ width: 84, height: 90 }}
                                variant="square"
                                src="https://themesfamily.com/tm/hadi/assets/img/service/footer/1.jpg"
                            />
                            <Avatar
                                sx={{ width: 84, height: 90 }}
                                variant="square"
                                src="https://themesfamily.com/tm/hadi/assets/img/service/footer/2.jpg"
                            />
                            <Avatar
                                sx={{ width: 84, height: 90 }}
                                variant="square"
                                src="https://themesfamily.com/tm/hadi/assets/img/service/footer/3.jpg"
                            />
                            <Avatar
                                sx={{ width: 84, height: 90 }}
                                variant="square"
                                src="https://themesfamily.com/tm/hadi/assets/img/service/footer/4.jpg"
                            />
                            <Avatar
                                sx={{ width: 84, height: 90 }}
                                variant="square"
                                src="https://themesfamily.com/tm/hadi/assets/img/service/footer/5.jpg"
                            />
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </footer>
    );
};

export default Footer;
