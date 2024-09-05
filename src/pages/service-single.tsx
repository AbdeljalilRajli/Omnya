import React from "react";
import Layout from "@/components/layout/Layout";
import ServiceDetailsMain from "@/components/containers/service-details/ServiceDetailsMain";
import ServiceDetailsBanner from "@/components/layout/banner/ServiceDetailsBanner";
import UxProcess from "@/components/containers/service-details/UxProcess";
import CtaTwo from "@/components/containers/service-details/CtaTwo";

const ServiceDetails = () => {
  return (
    <Layout header={2} footer={5} video={false}>
      <ServiceDetailsBanner />
      <ServiceDetailsMain />
      <UxProcess />
      <CtaTwo />
    </Layout>
  );
};

export default ServiceDetails;
