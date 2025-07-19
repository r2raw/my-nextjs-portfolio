import React from "react";

export default function ProjectInfo({title, description, techStack}) {
  return (
    <div className=" h-full flex flex-col gap-6">
      <h1 className="text-xl lg:text-4xl xl:text-6xl font-bold">{title}</h1>
      <p className="text-sm lg:text-base xl:text-2xl text-justify">
        {description}
      </p>
    </div>
  );
}
