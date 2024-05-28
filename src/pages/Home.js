import React from "react";
import HeroSection from "../components/Home/HeroSection";
import NewsSection from "../components/Home/NewsSection";
import BlogSection from "../components/Home/BlogSection";
import StatSection from "../components/Home/StatSection";
const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <NewsSection />
      <StatSection />
      <BlogSection />
    </React.Fragment>
  );
};

export default Home;
