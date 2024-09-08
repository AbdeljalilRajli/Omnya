import React from "react";
import Layout from "@/components/layout/Layout";
import HomeOneBanner from "@/components/layout/banner/HomeOneBanner";
import Agency from "@/components/containers/home/Agency";
import PortfolioText from "@/components/containers/home/PortfolioText";
import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import HomeThreeServices from "@/components/containers/home/HomeThreeServices";
import HomeTwoAward from "@/components/containers/home/HomeTwoAward";

const Home = () => {
  return (
    <Layout header={1} footer={4}>
      <HomeOneBanner />
      <Agency />
      <PortfolioText />
      <HomeThreeServices />
      <HomeTestimonial />
      <HomeTwoAward />   
    </Layout>
  );
};

export default Home;
