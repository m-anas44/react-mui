import React from "react";
import HeroSection from "../components/Home/HeroSection";
import NewsSection from "../components/Home/NewsSection";
import BlogSection from "../components/Home/BlogSection";
import StatSection from "../components/Home/StatSection";
import ContactSection from "../components/Home/ContactSection";
import MissionSection from "../components/Home/MissionSection";
import PerformanceSection from "../components/Home/PerformanceSection";
import UpMatchSection from "../components/Home/UpMatchSection";
const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <NewsSection />
      <StatSection />
      <PerformanceSection />
      <UpMatchSection />
      <BlogSection />
      <ContactSection />
      <MissionSection />
    </React.Fragment>
  );
};

export default Home;
