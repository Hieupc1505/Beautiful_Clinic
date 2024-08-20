import React from "react";
import Input from "./Input";
import Button from "../../components/Button";
import {
    faEnvelope,
    faHouse,
    faPhone,
} from "@fortawesome/free-solid-svg-icons";
import ContactItem from "./ContactItem";

const Contact = () => {
    return (
        <div className="container max-w-screen-xl mx-auto py-36">
            <div className="grid grid-cols-2 gap-32">
                <div className="cols-span-1 flex flex-col gap-10">
                    <div className="text-28px font-bold text-thmTitle">
                        Get In <span className="text-primary">Touch</span>
                    </div>
                    <div className="text-thmp text-15px leading-relaxed">
                        If you are going to use a passage of Lorem Ipsum, you
                        need to be sure there isn't anything embarrassing hidden
                        in the middle of text.
                    </div>
                    <div className="form-contact space-y-8">
                        <div className="flex items-center gap-8">
                            <Input
                                placeholder="Your Name"
                                sx="border-l-2 border border-l-solid rounded-lg border-l-primary focus:outline-none focus:ring-1 focus:border-transparent focus:ring-primary"
                            />
                            <Input
                                placeholder="Your Email"
                                sx="border-l-2 border border-l-solid rounded-lg border-l-primary focus:outline-none focus:ring-1 focus:border-transparent focus:ring-primary"
                            />
                        </div>
                        <div className="flex">
                            <Input
                                placeholder="Your Subject"
                                sx="border-l-2 border border-l-solid rounded-lg border-l-primary focus:outline-none focus:ring-1 focus:border-transparent focus:ring-primary"
                            />
                        </div>
                        <div className="flex">
                            <textarea
                                className="border-l-2 border border-l-solid rounded-lg border-l-primary focus:outline-none focus:ring-1 focus:border-transparent focus:ring-primary min-h-60 w-full p-4"
                                placeholder="Your Message"
                            />
                        </div>
                        <Button sx=" text-white text-15px bg-primary px-9 py-5 rounded-lg">
                            Send Message
                        </Button>
                    </div>
                </div>
                <div className="cols-span-1 flex flex-col gap-10">
                    <div className="text-28px font-bold text-thmTitle">
                        Contact Info
                    </div>
                    <div className="text-thmp text-15px leading-relaxed">
                        Lorem Ipsum generators on the Internet tend to repeat
                        predefined chunks as necessary, making this the first
                        true generator on the Internet. It uses a dictionary.
                    </div>
                    <div className="flex flex-col gap-10">
                        <ContactItem
                            icon={faHouse}
                            title="Address Location"
                            detail="1 Grafton Street, Dublin."
                        />
                        <ContactItem
                            icon={faPhone}
                            title="Phone Number"
                            detail="+84 983784538953"
                        />
                        <ContactItem
                            icon={faEnvelope}
                            title="Email"
                            detail="example1213@outlook.com"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
