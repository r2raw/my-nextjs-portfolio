"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
export default function AchievementDetailImages({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const maxIndex = images.length - 1;
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  const handleNext = () => {
    if (selectedIndex == maxIndex) return setSelectedIndex(0);
    setSelectedIndex((prev) => prev + 1);
  };

  const handleClick = (imgIndex) => {
    setSelectedIndex(imgIndex);
  };

  return (
    <div className=" bg-white/20 rounded-2xl p-4 flex flex-col gap-4">
      <div className="relative h-80 lg:h-128 w-full">
        <Image
          src={images[selectedIndex]}
          alt="achievement-image"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        {images.map((item, index) => (
          <div
            key={index}
            className={`h-20 w-20 relative cursor-pointer ${
              selectedIndex != index ? "opacity-50" : "border-2 border-lighter"
            }`}
            onClick={()=>{handleClick(index)}}
          >
            <Image src={item} alt={`item-${index}`} fill />
          </div>
        ))}
      </div>
    </div>
  );
}
