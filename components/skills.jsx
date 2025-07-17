import React from "react";
import SkillsContainer from "./skills/skills-container";

export default function SkillsSection() {
  return (
    <section className=" bg-lighter py-40 px-20 flex flex-col items-center justify-between gap-20">
      <h3 className=" text-4xl font-bold">TECHNICAL SKILLS</h3>
      <SkillsContainer />
    </section>
  );
}
