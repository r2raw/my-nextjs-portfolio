"use client";
import React, { useEffect, useState } from "react";
import AchievementsCard from "./achievements-card";
import useCurrentWidth from "../../hooks/useCurrentWidth";
import { AnimatePresence, delay, motion, scale, stagger } from "framer-motion";

export default function AchievementList({ achievements }) {
  const currentWidth = useCurrentWidth();
  const [selectedIndex, setSelectedIndex] = useState(1);
  let minifiedAchievements = achievements.filter((item, index) => index != 0);
  let pageCount = achievements.length;

  useEffect(() => {
    if (currentWidth === "md" || currentWidth == "sm") {
      const intervalId = setInterval(() => {
        handleNextPage();
        console.log(`Page Count: ${pageCount}`);
      }, 3000);

      return () => clearInterval(intervalId);
    }
  }, [selectedIndex]);
  useEffect(() => {
    setSelectedIndex(0);
  }, [currentWidth]);
  let classes = "grid md:grid-cols-2  gap-2 md:col-span-3 lg:grid-cols-3";
  if (currentWidth == "md") {
    pageCount = Math.ceil(minifiedAchievements.length / 4);
    const maxIndex = 4 * (selectedIndex + 1) - 1;
    const minIndex = selectedIndex * 4;
    minifiedAchievements = minifiedAchievements.filter(
      (item, index) => index >= minIndex && index <= maxIndex
    );
  }
  let currentAchievementDisplay = minifiedAchievements.map((item) => (
    <AchievementsCard key={item.id} achievement={item} />
  ));

  if (currentWidth == "sm") {
    currentAchievementDisplay = (
      <AchievementsCard
        key={achievements[selectedIndex].id}
        achievement={achievements[selectedIndex]}
      />
    );
  }

  const handleNextPage = () => {
    if (selectedIndex === pageCount - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex((prev) => prev + 1);
    }
  };

  const handleClick = (pageIndex) => {
    console.log(`clicked index: ${pageIndex}`);
    setSelectedIndex(pageIndex);
  };
  return (
    <>
      <div
        className={classes}
      >
        {currentAchievementDisplay}
        <motion.div
          variants={{
            visible: {
              transition: { delayChildren: stagger(1, { startDelay: 1 }) },
            },
          }}
          className="w-full flex justify-center items-center md:col-span-2 gap-2 mt-4 lg:hidden"
        >
          {Array.from({ length: pageCount }).map((_, i) => (
            <motion.button
              key={i}
              variants={{
                hidden: { opacity: 0, scale: 0.5 },
                visible: { opacity: 1, scale: 1 },
              }}
              initial={"hidden"}
              animate={"visible"}
              exit={"visible"}
              whileInView={"visible"}
              transition={{
                type: "spring",
              }}
              className={`h-4 w-4 ${
                selectedIndex == i ? "bg-white/30" : "bg-white"
              } rounded-full cursor-pointer`}
              onClick={() => {
                handleClick(i);
              }}
            ></motion.button>
          ))}
        </motion.div>
      </div>
    </>
  );
}
