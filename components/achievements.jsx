import React from "react";
import AchievementsContainer from "./achievements/achievements-container";

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 lg:py-40 px-2 lg:px-20 items-center flex flex-col min-h-dvh gap-20">
      <h3 className="text-4xl font-bold">ACHIEVEMENTS</h3>
      <AchievementsContainer />
    </section>
  );
}
