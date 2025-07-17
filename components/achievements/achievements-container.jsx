import React from "react";
import achievementsData from "../../data/achievements-data";
import Image from "next/image";
import AchievementList from "./achivements-list";
export default function AchievementsContainer() {
  return (
    <div className="grid md:grid-cols-4 p-4 lg:p-10 rounded-4xl bg-white/10 border border-background w-full gap-2 mt-20">
      <div className="p-2 bg-white w-full rounded-2xl flex flex-col justify-between gap-4 md:gap-8">
        <div className=" flex flex-col gap-4">
          <div className="relative w-full h-40 md:h-52 lg:h-60">
            <Image
              src={achievementsData[0].thumbnail}
              alt={achievementsData[0].title}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-xl"
            />
          </div>
          <h1 className="text-background text-sm md:text-2xl lg:text-4xl xl:text-5xl tracking-wide text-justify font-bold">
            {achievementsData[0].title}
          </h1>
        </div>
        <button className="bg-background tracking-wide text-sm md:text-base md:tracking-widest rounded-4xl md:py-1 cursor-pointer border border-background transition-colors duration-500 hover:bg-white hover:text-background ease-in">Read more...</button>
      </div>
      <AchievementList achievements={achievementsData} />
    </div>
  );
}
