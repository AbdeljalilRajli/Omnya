import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/layout/banner/HomeOneBanner";
import AboutMe from "@/components/containers/home/About-me";
import PortfolioText from "@/components/containers/home/PortfolioText";
import Testimonial from "@/components/containers/home/Testimonials";
import Experience from "@/components/containers/home/Experience";
import Education from "@/components/containers/home/Education";

const Home = () => {
  return (
    <Layout header={1} footer={4}>
      <HeroSection />
      <AboutMe />
      <PortfolioText />
      <Experience />
      <Testimonial />
      <Education />   
    </Layout>
  );
};

export default Home;
