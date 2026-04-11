import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import { topMeals } from "./topMeal";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
  return (
    <div className="px-5">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={5}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        {topMeals.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem image={item.image} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MultiItemCarousel;