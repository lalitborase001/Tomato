import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { topMeals } from "./topMeal";
import CarouselItem from "./CarouselItem";

const MultiItemCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <div className="px-5">
      <Swiper spaceBetween={20} slidesPerView={5} autoplay={{ delay: 2000 }}>
        {topMeals.map((item, index) => (
          <SwiperSlide key={index}>
            <CarouselItem image={item.image} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MultiItemCarousel