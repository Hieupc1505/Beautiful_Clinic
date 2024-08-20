import React from "react";
import Header from "./container/header";
import "./assets/common.css";
import Hero from "./container/hero";
import Feature from "./container/feature";
import SectionAbout from "./container/about";
import Counter from "./container/Counter";
import SectionMedia from "./container/media";
import Course from "./container/course";
import Portfolio from "./container/portfolio";
import Review from "./container/review";
import PopularTeacher from "./container/teacher";
import Tools from "./container/tools";
import News from "./container/news";
import Contact from "./container/contact";
import Ask from "./container/ask";
import Footer from "./container/footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HadiPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <Feature />
            <SectionAbout />
            <Counter />
            <SectionMedia />
            <Course />
            <Portfolio />
            <Review />
            <PopularTeacher />
            <Tools />
            <News />
            <Contact />
            <Ask />
            <Footer />
        </>
    );
};

export default HadiPage;
