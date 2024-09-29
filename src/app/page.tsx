"use client";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import AOS from "aos";
import "aos/dist/aos.css"; // استيراد ملف CSS الخاص بالأنيميشن

// تحميل الأقسام بشكل ديناميكي
const MarketingSection = dynamic(() => import("./home/heroSection"));
const ProjectsSection = dynamic(() => import("./home/projectCard"));
const WhoWeAreSection = dynamic(() => import("./home/WhoWeAreSection"));
const FAQ = dynamic(() => import("./home/FAQ"));

const Home: React.FC = () => {
  // تهيئة AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // تحديد مدة الأنيميشن
      once: true, // الأنيميشن يحدث مرة واحدة فقط
    });
  }, []);

  return (
    <div>
      <div data-aos="fade-up">
        <MarketingSection />
      </div>
      <div data-aos="fade-left">
        <ProjectsSection />
      </div>
      <div data-aos="fade-right">
        <WhoWeAreSection />
      </div>
      <div data-aos="fade-up">
        <FAQ />
      </div>
    </div>
  );
};

export default Home;
