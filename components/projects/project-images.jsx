import Image from "next/image";
import React from "react";

function ProjectImages({projectImg}) {
  return (
    <div className=" w-80 md:w-2xl p-2 rounded-2xl  bg-white/20 relative h-96 flex items-center justify-center">
      <Image
        src={projectImg}
        alt="asd"
        className=" w-full h-full object-contain"
      />
    </div>
  );
}

export default ProjectImages;
