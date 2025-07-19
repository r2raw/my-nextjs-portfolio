"use client";
import React from "react";
import achievementsData from "../../data/achievements-data";
import Image from "next/image";
import AchievementList from "./achivements-list";
import useCurrentWidth from "../../hooks/useCurrentWidth";
import LgAchievementsContainer from "./lg-achievements-container";
import SmAchievementsContainer from "./sm-achievments-container";
export default function AchievementsContainer() {
  const currentWidth = useCurrentWidth();

  let container = <SmAchievementsContainer  />
  if (currentWidth != "sm" || currentWidth == undefined) {
    container = <LgAchievementsContainer />;
  }
  return (
    <div className="grid md:grid-cols-5 lg:grid-cols-4 p-4 lg:p-10 rounded-4xl bg-white/10 border border-background w-full gap-2   ">
      {container}
    </div>
  );
}
