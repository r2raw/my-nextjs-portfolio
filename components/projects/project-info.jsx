"use client";
import React from "react";
import { motion } from "framer-motion";

export default function ProjectInfo({ title, description, techStack }) {
  return (
    <div className=" h-full flex flex-col gap-6">
      <motion.h1
        variants={{
          visible: { opacity: 100, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        animate="visible"
        initial="hidden"
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
        }}
        className="text-xl lg:text-4xl xl:text-6xl font-bold"
      >
        {title}
      </motion.h1>
      <motion.p
        variants={{
          visible: { opacity: 100, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        initial="hidden"
        transition={{
          duration: 0.5,
          delay: 0.7,
          type: "spring",
        }}
        className="text-sm lg:text-base xl:text-2xl text-justify"
      >
        {description}
      </motion.p>
    </div>
  );
}
