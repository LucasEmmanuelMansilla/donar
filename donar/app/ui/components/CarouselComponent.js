import React from 'react';
import Carousel from 'react-native-snap-carousel';
export default function CarouselComponent({
  data,
  _renderItem,
  sliderWidth,
  itemWidth,
  isCarousel,
}) {
  return (
    <Carousel
      autoplay={true}
      enableMomentum={false}
      lockScrollWhileSnapping={true}
      loop={true}
      ref={isCarousel}
      data={data}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
    />
  );
}
