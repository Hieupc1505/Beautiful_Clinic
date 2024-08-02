import React from "react";
import { Box } from "~/components/Box";
import contactImg from "/contact.png";
import { Typography } from "~/components/Typography";
import Button from "~/components/Button";
import BubleContact from "/bublecontact.png";
const Contact = () => {
    return (
        <Box className="contactWrap dflex positionRelative">
            <Box className="positionAbsolute bubleContact">
                <img src={BubleContact} width={"100%"} height={"auto"} alt="" />
            </Box>
            <Box className="contactItem">
                <img src={contactImg} width={"100%"} height={"auto"} alt="" />
            </Box>
            <Box className="dflex directionColumn contactRight">
                <Box className="dflex directionColumn contactText contactItem">
                    <Typography variant="text" color="subtitle" size="md">
                        Contact Us
                    </Typography>
                    <Typography
                        variant="title"
                        color="primary"
                        size="lg"
                        className="title"
                    >
                        Send your inquiry to our expert team
                    </Typography>
                    <Typography variant="text" color="secondary">
                        Lorem ipsum dolor sit amet nulla turapis tellus.
                    </Typography>
                </Box>
                <Box className="contactForm" component="form">
                    <Box className="dflex boxName">
                        <input type="text" placeholder="First name" />
                        <input type="text" placeholder="Last name" />
                    </Box>
                    <Box className="inputBlock">
                        <input type="text" placeholder="Email Address" />
                    </Box>
                    <Box className="inputBlock">
                        <input type="text" placeholder="Subject message" />
                    </Box>
                    <Box className="formTextarea">
                        <textarea
                            id="w3review"
                            name="w3review"
                            placeholder="Your inquiry here"
                        />
                    </Box>
                    <Button variant="primary" size="md" className="sendMessBtn">
                        Send Message
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Contact;
