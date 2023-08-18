import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import CardTestimonial from "../CardTestimonial/CardTestimonial";

function Slider() {
  return (
    <div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <CardTestimonial />
        </SwiperSlide>
        <SwiperSlide>
          <CardTestimonial />
        </SwiperSlide>
        <SwiperSlide>
          <CardTestimonial />
        </SwiperSlide>
        <SwiperSlide>
          <CardTestimonial />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
export default Slider;
