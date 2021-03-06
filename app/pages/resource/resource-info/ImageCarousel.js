import PropTypes from 'prop-types';
import React from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';

import BackgroundImage from '../../../shared/background-image/BackgroundImage';

const carouselInterval = 7000;

function renderCarouselItem(image) {
  return (
    <Carousel.Item key={image.url}>
      <BackgroundImage image={image} />
    </Carousel.Item>
  );
}

function ImageCarousel({ images }) {
  return (
    <Carousel
      className="image-carousel"
      controls={images.length > 1}
      indicators={false}
      interval={carouselInterval}
    >
      {images.map(renderCarouselItem)}
    </Carousel>
  );
}

ImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageCarousel;
