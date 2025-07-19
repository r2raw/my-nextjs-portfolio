"use client";
import Image from "next/image";
import React from "react";
import AchievementList from "./achivements-list";
import achievementsData from "../../data/achievements-data";
import Link from "next/link";
import { motion } from "framer-motion";
export default function LgAchievementsContainer({ currScreen }) {
  return (
    <>
      <div className="p-2 bg-white w-full rounded-2xl flex flex-col justify-between gap-4 md:gap-8 md:col-span-2 lg:col-span-1">
        <motion.div
          variants={{
            visible: { opacity: 100, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
          initial={"hidden"}
          animate={"visible"}
          transition={{ duration: 0.2, stiffness: 100, type: "tween" }}
          className=" flex flex-col gap-4"
        >
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
        </motion.div>
        <Link
          href={`achievements/${achievementsData[0].id}`}
          className="bg-background text-center tracking-wide text-sm md:text-base md:tracking-widest rounded-4xl md:py-1 cursor-pointer border border-background transition-colors duration-500 hover:bg-white hover:text-background ease-in"
        >
          Read more...
        </Link>
      </div>
      <AchievementList
        achievements={achievementsData}
        currScreen={currScreen}
      />
    </>
  );
}
