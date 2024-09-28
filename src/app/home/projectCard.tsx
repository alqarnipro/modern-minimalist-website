import React from "react";
import Mainbtn from "../components/mainBtn";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  category: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  category,
  imageUrl,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl:
        "/assets/beautiful-young-woman-home-office-working-from-home-teleworking-concept.png",
    },
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl: "/assets/close-up-male-hands-using-laptop-home-1.png",
    },
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl: "/assets/close-up-male-hands-using-laptop-home.png",
    },
    {
      title: "Grow-up your real traffic",
      category: "Marketing",
      imageUrl: "/assets/papers-laptop-office-table.png",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex">
          <div className="flex flex-col">
            <div className="flex align-middle justify-start">
              <p className="m-0 p-0">feature</p>
              <div className=" left-0 bottom-1 w-1/4 h-0.5  bg-gray-700 mt-3 ms-2"></div>
            </div>
            <h2 className="text-7xl mb-8 uppercase font-thin"> Projects</h2>
          </div>
          <Mainbtn text="View More Projects" link="/"></Mainbtn>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
