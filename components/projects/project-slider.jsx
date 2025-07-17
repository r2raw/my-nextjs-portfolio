import React from "react";
import ProjectImages from "./project-images";
export default function ProjectSlider({ imgs }) {
  return (
    <div className="  px-4 flex gap-4 absolute ">
      {
        imgs.map((item, index) => <ProjectImages key={index} projectImg={item}/>)
      }
    </div>
  );
}
