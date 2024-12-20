import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const SwiperComponent = () => {
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination]}
    >
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/158063/bellingrath-gardens-alabama-landscape-scenic-158063.jpeg?cs=srgb&dl=pexels-pixabay-158063.jpg&fm=jpg"
          alt="Swiper Slide 1"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?cs=srgb&dl=pexels-pixabay-147411.jpg&fm=jpg"
          alt="Swiper Slide 2"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <img
          src="https://w0.peakpx.com/wallpaper/297/395/HD-wallpaper-people-nature-and-landscape-nature-landscape.jpg"
          alt="Swiper Slide 3"
          style={{ width: "100%" }}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
