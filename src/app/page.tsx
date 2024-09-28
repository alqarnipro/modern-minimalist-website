import React from "react";
import dynamic from "next/dynamic";

const MarketingSection = dynamic(() => import("./home/heroSection"));
const ProjectsSection = dynamic(() => import("./home/projectCard"));
const WhoWeAreSection = dynamic(() => import("./home/WhoWeAreSection"));
const FAQ = dynamic(() => import("./home/FAQ"));

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
