"use client";
import React from "react";
import ProjectImages from "./project-images";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { Autoplay } from "swiper/modules";

export default function ProjectSlider({ imgs }) {
  return (
    <Swiper
      className="h-full px-4 flex gap-4 absolute "
      loop={true}
      speed={3000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      mousewheel={true}
      spaceBetween={8}
      slidesPerView="1.2"
      modules={[Autoplay]}
    >
      {imgs.map((item, index) => {
        return (
          <SwiperSlide>
            <ProjectImages key={index} projectImg={item} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
