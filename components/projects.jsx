"use client";

import React, { useState } from "react";
import ProjectContainer from "./projects/project-container";
import projectsData from "../data/projects-data";

export default function ProjectsSection() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrevButton = () => {
    if (selectedIndex == 0) return setSelectedIndex(2);

    setSelectedIndex((prev) => prev - 1);
  };

  const handleNextButton = () => {
    if (selectedIndex == 2) return setSelectedIndex(0);

    setSelectedIndex((prev) => prev + 1);
  };
  return (
    <section className="py-40 pl-4 md:pl-10 lg:pl-20 relative w-full min-h-dvh" id="projects">
      <h1 className=" -z-10 absolute text-6xl lg:text-[20rem] top-32 lg:top-10 font-bold opacity-10">
        PROJECTS
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 items-center justify-between w-full">
        <div className="font-bold text-lg md:text-2xl">
          <button className="cursor-pointer hover:text-white/10 hover:scale-150" onClick={handlePrevButton}>
            &lt;
          </button>{" "}
          {selectedIndex + 1} of {projectsData.length}{" "}
          <button className="cursor-pointer hover:text-white/10 hover:scale-150" onClick={handleNextButton}>&gt;</button>
        </div>
        <hr className=" lg:col-span-2 justify-between" />
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 mt-10 gap-4 ">
        <ProjectContainer selectedProject={projectsData[selectedIndex]} />
      </div>
    </section>
  );
}
