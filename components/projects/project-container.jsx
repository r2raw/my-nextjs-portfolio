import React from "react";
import ProjectInfo from "./project-info";
import ProjectSlider from "./project-slider";

export default function ProjectContainer({ selectedProject }) {
  return (
    <>
      <ProjectInfo
        title={selectedProject.title}
        description={selectedProject.description}
        techStack={selectedProject.techStack}
      />
      <div className="lg:col-span-2 relative overflow-hidden h-full">
        <ProjectSlider imgs={selectedProject.images} />
      </div>
    </>
  );
}
