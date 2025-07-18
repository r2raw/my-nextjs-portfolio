'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 

import "swiper/css";
import {
  
  
  Autoplay,
} from "swiper/modules";
import Image from "next/image";

export default function CertificateSlider({ certList, reversed }) {
  const duplicateCertList = [...certList, ...certList];
  return (
    <Swiper
      className="h-dvh w-full"
      direction="vertical"
      loop={true}
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: reversed,
      }}
      mousewheel={true}
      spaceBetween={10}
      slidesPerView="3"
      slideToClickedSlide
      modules={[Autoplay]}
    >
      {duplicateCertList.map((item, index) => {
        return (
          <SwiperSlide
            className=" bg-dark-base rounded-md flex flex-col lg:px-4 lg:py-6 lg:gap-4 w-full relative h-full"
            onClick={() => {
              console.log("Slider clicked");
            }}
            key={index}
          >
            <Image src={item.url} alt={item.title} fill  />
            <h6 className=" text-center">{item.title}</h6>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
