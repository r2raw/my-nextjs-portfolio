import React from "react";
import SkillsContainer from "./skills/skills-container";

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-dvh bg-lighter py-20 lg:py-40 px-2 lg:px-20 flex flex-col items-center justify-between gap-20">
      <h3 className=" text-4xl font-bold text-center">TECHNICAL SKILLS</h3>
      <SkillsContainer />
    </section>
  );
}
