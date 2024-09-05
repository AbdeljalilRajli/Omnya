import React from "react";
import Layout from "@/components/layout/Layout";
import CmnBanner from "@/components/layout/banner/CmnBanner";
import ProjectDetailsMain from "@/components/containers/project/ProjectDetailsMain";
import UxProcess from "@/components/containers/service-details/UxProcess";

const ProjectDetails = () => {
  return (
    <Layout header={2} footer={5} video={0}>
      <CmnBanner
        title="Brand Identity"
        navigation="Brand Identity"
        parent="Projects"
        parentLink="our-projects"
      />
      <ProjectDetailsMain />
      <UxProcess />
    </Layout>
  );
};

export default ProjectDetails;
