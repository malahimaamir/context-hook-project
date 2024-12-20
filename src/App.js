import React from 'react';
import SwiperComponent from './Components/SwiperComponent';
import SliderComponent from './Components/SliderComponent';
import CarouselComponent from './Components/CarouselComponent';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '20px' }}>React swiper</h1>
      <SwiperComponent />
      <h1 style={{ textAlign: 'center', margin: '20px' }}>React slider</h1>
      <SliderComponent />
      <h1 style={{ textAlign: 'center', margin: '20px' }}>React carousel</h1>
      <CarouselComponent />
    </div>
  );
};

export default App;
