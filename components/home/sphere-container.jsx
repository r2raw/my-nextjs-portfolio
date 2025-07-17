import React from "react";

export default function SphereContainer() {
  return (
    <div className="absolute bottom-0 left-0 h-full w-full -z-10">
      <div className="rounded-full h-[20rem] -left-60 bottom-50 w-[20rem] md:h-[40rem] md:w-[40rem] md:-left-60 md:bottom-80 shadow-2xl bg-radial-[at_60%_-70%] from-[#ABB3DE] via-[#000D9C] via-80% to-black to-100% blur-lg absolute -z-20"></div>
      <div className="rounded-full -bottom-10 -left-50 h-[25rem] w-[25rem] md:h-[50rem] md:w-[50rem] md:-left-30 md:-bottom-50  absolute shadow-2xl bg-radial-[at_50%_-70%] from-[#ABB3DE] via-[#000D9C] via-80% to-black to-100% blur-lg"></div>
      <div className="rounded-full left-10 -bottom-50 h-[20rem] w-[20rem] md:h-[40rem] md:w-[40rem] md:left-100 md:-bottom-80  shadow-2xl bg-radial-[at_50%_-70%] from-[#ABB3DE] via-[#000D9C] via-80% to-black to-100% blur-lg absolute -z-20"></div>
    </div>
  );
}
