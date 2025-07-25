import Image from "next/image";
import React from "react";
import {motion} from 'framer-motion'

export default function SkillCard({ title, images }) {
  return (
    <motion.div
    variants={{
      visible: {opacity: 100, scale: 1},
      hidden: {opacity: 1, scale: 0}
    }}
    initial="hidden"
    animate={'visible'}
    transition={{duration: 0.5, type:'tween'}}
    viewport={{once: true, amount: 0.3}}
     className="relative bg-white rounded-4xl px-8">
      <div className="absolute w-3/4 translate-x-1/2 right-1/2  text-center text-background border-2 border-background rounded-2xl px-2 py-2 font-bold -translate-y-1/2 bg-white">
        {title}
      </div>
      <div className="grid grid-cols-3 gap-8 my-10 w-full ">
        {images.map((item, index) => (
          <div key={index} className=" h-16 w-full relative flex justify-center items-center">
            <Image src={item} alt={`image${index}`} fill />
          </div>
        ))}
      </div>
    </motion.div>
  );
}
