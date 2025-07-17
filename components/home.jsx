import React from "react";
import SphereContainer from "./home/sphere-container";
import homeBg from '../assets/home-bg.jpg'
import Image from "next/image";

function HomeSection() {
  return (
    <section className="flex h-dvh w-full justify-center items-center  relative">
      <div className="absolute -z-10 opacity-20 -top-50 left-0 w-full h-[130dvh] md:h-[120dvh]">
        <Image src={homeBg} alt="home-bg" fill style={{objectFit: 'cover'}}/>
      </div>
      <SphereContainer />
      <div className=" w-2/3   p-4 lg:px-10 lg:py-20 rounded-4xl flex flex-col items-center justify-center text-center gap-4">
        <h1 className=" text-xl md:text-4xl lg:text-6xl font-bold">
          Arturo D. Marte Jr. II
        </h1>
        <h2 className="text-lg lg:text-4xl">Full-Stack Programmer</h2>
        {/* <p className="text-[0.8rem] lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p> */}
        <button className="group bg-white text-background w-56 py-2 border border-background rounded-4xl cursor-pointer hover:text-white flex justify-between items-center px-8 peer ease-in-out relative duration-500">
          <div className=" bg-background inset-0 rounded-4xl absolute left-0 top-0 h-full w-0 z-10  transition-all duration-200 ease-out group-hover:w-full group-hover:shadow-lg group-hover:shadow-background "></div>
          <p className="z-10 transition-all text-2xl font-bold duration-1000 group-hover:order-1 group-hover:rotate-180 transform">{`<`}</p>
          <p className="z-10 ">{`View Resume`}</p>
        </button>
      </div>
    </section>
  );
}

export default HomeSection;
