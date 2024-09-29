import Image from "next/image";
import Link from "next/link";
import React from "react";

const cardsinfo = [
  {
    title: "Performance Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    icon: "/assets/Vector (2).png",
  },
  {
    title: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    icon: "/assets/Group.png",
  },
  {
    title: "Offline Meetings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    icon: "/assets/XMLID_2656_.png",
  },
  {
    title: "Email Marketing ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    icon: "/assets/biometrics 1.png",
  },
  {
    title: "Branding & Identity",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    icon: "/assets/Group 3.png",
  },
  {
    title: "Offline Meetings",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor",
    icon: "/assets/networking.png",
  },
];
interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col items-start p-4 rounded-lg ">
      <div className="hover:bg-secondary p-2 rounded-md transition-all duration-300 ease-in-out">
        <Image src={icon} alt={title} width={50} height={50} />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <Link href="/" className="underline">
        Read More
      </Link>
    </div>
  );
};

const ServiceCards: React.FC = () => {
  return (
    <section className="p-6 lg:p-12">
      <div className="container mx-auto">
        <div className="flex justify-between">
          <h2 className="text-5xl lg:text-4xl font-bold mb-8">
            OUR EXCLUSIVE <br /> SERVICES
          </h2>
          <p className="w-1/3 text-gray-500">
            We bet on brands that shift categories and add value to people is
            lives; and on founders who are motivated to shape 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsinfo.map((card, i) => {
            return (
              <ServiceCard
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
