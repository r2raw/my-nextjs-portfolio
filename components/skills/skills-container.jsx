"use client";
import React, { useEffect, useState } from "react";
import SkillCard from "./skill-card";
import skillsData from "../../data/skills-data";
import useCurrentWidth from "../../hooks/useCurrentWidth";
export default function SkillsContainer() {
  const currentWidth = useCurrentWidth();
  const [selectedIndex, setSelectedIndex] = useState(0);

  console.log(currentWidth)
  useEffect(()=>{
    setSelectedIndex(0)
  }, [currentWidth])
  let divisor = 1;
  if (currentWidth == "md") {
    divisor = 2;
  } else if(currentWidth == "lg" || currentWidth == "xl"){
    
    divisor = 3
  }
  
  const skillsPages = Math.ceil(skillsData.length / divisor);
  const maxIndex = (divisor * (selectedIndex + 1)) - 1;
  let minIndex = divisor * selectedIndex;
  const currentSkillsDisplay = skillsData.filter((item,index) => index >= minIndex && index <= maxIndex );

  const handleClick = (indexNumber)=>{
    setSelectedIndex(indexNumber)
  }
  return (
    <>
      <div className={`grid grid-cols-${divisor} gap-10 w-full `}>
        {currentSkillsDisplay.map((item) => (
          <SkillCard
            key={item.titleHeader}
            title={item.titleHeader}
            images={item.images}
          />
        ))}
      </div>
      <div className="flex gap-2">
        {Array.from({ length: skillsPages }).map((_, i) => (
          <button key={i} className={`rounded-full w-4 h-4 ${selectedIndex  == i ? 'bg-white/20' : 'bg-white'} cursor-pointer`} onClick={()=>handleClick(i)}></button>
        ))}
      </div>
    </>
  );
}
