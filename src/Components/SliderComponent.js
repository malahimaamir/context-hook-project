import React from 'react';
import Slider from 'react-slick';

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div style={{ maxWidth: '600px', margin: '20px auto' }}>
      <Slider {...settings}>
        <div>
          <img
            src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Slider Slide 1"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg"
            alt="Slider Slide 2"
            style={{ width: "100%" }}
          />
        </div>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2014/12/26/11/57/sunrise-580379_1280.jpg"
            alt="Slider Slide 3"
            style={{ width: "100%" }}
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
