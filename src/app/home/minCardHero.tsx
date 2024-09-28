import Image from "next/image";
import React from "react";

interface MinCardHeroSectionProps {
  title: string;
  description: string;
  icon: string;
}

const MinCardHeroSection: React.FC<MinCardHeroSectionProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <div className=" text-white p-6 rounded-lg flex flex-col items-center m-2 shadow-sm shadow-secondary hover:shadow-xl transition-shadow duration-300">
      <div className="bg-secondary p-4 rounded-full mb-4 w-16">
        <Image src={icon} alt="feature Imge" width={40} height={40} />
      </div>
      <h1 className="text-xl font-semibold mb-2">{title}</h1>
      <p className=" text-gray-300">{description}</p>
    </div>
  );
};

export default MinCardHeroSection;
