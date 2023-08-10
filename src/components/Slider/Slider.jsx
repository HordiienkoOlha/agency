import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import CardTestimonial from "../CardTestimonial/CardTestimonial";
import Container from "../Container/Container";

function Slider() {
  return (
    <Container>
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
    </Container>
  );
}
export default Slider;
