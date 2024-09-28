import React from "react";
import MarketingSection from "./home/heroSection";
import ProjectsSection from "./home/projectCard";
import WhoWeAreSection from "./home/WhoWeAreSection";
import FAQ from "./home/FAQ";

const Home: React.FC = () => {
  return (
    <div>
      <MarketingSection />
      <ProjectsSection />
      <WhoWeAreSection />
      <FAQ />
    </div>
  );
};

export default Home;
