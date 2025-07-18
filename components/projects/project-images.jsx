import Image from "next/image";
import React from "react";

function ProjectImages({projectImg}) {
  return (
    <div className="  p-2 rounded-2xl  bg-white/20 relative h-full flex items-center justify-center">
      <Image
        src={projectImg}
        alt="asd"
        fill
        style={{objectFit:'contain'}}
      />
    </div>
  );
}

export default ProjectImages;
