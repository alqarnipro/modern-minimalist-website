import React from "react";
import MarketingSection from "./home/heroSection";
import ProjectsSection from "./home/projectCard";

const Home: React.FC = () => {
  return (
    <div>
      <MarketingSection />
      <ProjectsSection />
    </div>
  );
};

export default Home;
