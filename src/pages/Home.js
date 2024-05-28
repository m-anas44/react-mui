import React from "react";
import HeroSection from "../components/Home/HeroSection";
import NewsSection from "../components/Home/NewsSection";
import BlogSection from "../components/Home/BlogSection";
import StatSection from "../components/Home/StatSection";
import ContactSection from "../components/Home/ContactSection";
const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <NewsSection />
      <StatSection />
      <BlogSection />
      <ContactSection />
    </React.Fragment>
  );
};

export default Home;
