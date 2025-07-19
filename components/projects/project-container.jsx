"use client";
import React from "react";
import ProjectInfo from "./project-info";
import ProjectSlider from "./project-slider";
import { motion } from "framer-motion";

export default function ProjectContainer({ selectedProject }) {
  return (
    <>
      <ProjectInfo
        title={selectedProject.title}
        description={selectedProject.description}
        techStack={selectedProject.techStack}
      />
      <motion.div
        variants={{
          visible: { opacity: 100, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        whileInView="visible"
        initial="hidden"
        transition={{
          duration: 0.5,
          delay: 1,
          type: "spring",
        }}
          viewport={{once: true, amount: 0.3}}
        className="lg:col-span-2 relative overflow-hidden h-full"
      >
        <ProjectSlider imgs={selectedProject.images} />
      </motion.div>
    </>
  );
}
