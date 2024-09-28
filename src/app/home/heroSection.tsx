import React from "react";
import Mainbtn from "../components/mainBtn";
import MinCardHeroSection from "./minCardHero";
import Image from "next/image";

const HeroSection: React.FC = () => {
  const features = [
    {
      title: "Scale your business team quickly",
      description:
        "We provide the perfect solutions for quickly hiring specialized teams, allowing your company to expand rapidly and meet market demands",
      icon: "/assets/Container-1.png",
    },
    {
      title: "Improve yearly product sale ratio",
      description:
        "With our optimized marketing strategies, you can significantly boost sales rates and increase profits throughout the year",
      icon: "/assets/Container-2.png",
    },
    {
      title: "Grow-up your real traffic",
      description:
        "We help you attract more visitors who are genuinely interested in your services, increasing the chances of converting them into loyal customer",
      icon: "/assets/Container.png",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between p-8 bg-gradient-to-r from-gridiantOne to-gridiantTow h-screen">
        <div className="px-2  ">
          <span className="uppercase font-thin text-2xl">
            digital marketing agency
          </span>
          <h1 className="lg:text-8xl uppercase text-6xl">
            <span className="font-bold"> We help to</span>
            <span className="font-thin"> grow your startup</span>
          </h1>
        </div>
        <div className="hidden lg:flex w-2/3 align-middle flex-col p-2 ">
          <div className="w-1/3">
            <Image
              src="/assets/group-images.png.png"
              alt="Customer images"
              className="h-auto rounded-full shadow-lg"
            />
          </div>
          <div className="">
            <p className="mt-4 text-lg text-gray-700">
              We have 18k+ customers world-wide
            </p>
            <p className="mt-2 text-md text-gray-500 mb-4">
              We believe that the surest measure of success is when a client
              partners with us; more than half our clients stay with us for
              longer than a single project.
            </p>
            <Mainbtn text="Get Started" link="/" />
          </div>
        </div>
      </div>
      <div className="bg-primary  h-auto ">
        <div className="w-2/3 relative bottom-20 ">
          <Image
            src="/assets/Group 5.png"
            alt="hero seaction imge"
            className="mx-auto"
          />
        </div>
        <div className="max-w-4xl mx-auto  px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-15">
          {features.map((feature, index) => (
            <MinCardHeroSection
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
