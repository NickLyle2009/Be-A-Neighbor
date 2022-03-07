import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide from '../images/slide.PNG';

function CarouselComp() {
  return(
    <div className='carousel-wrapper'>
    <Carousel>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
        
          <Carousel.Caption>
          <div className='carousel-text'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ullam?</h3>
            <p> ~ Nulla vitae</p>
            </div>
          </Carousel.Caption>

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
        
          <Carousel.Caption>
          <div className='carousel-text'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ullam?</h3>
            <p> ~ Nulla vitae</p>
            </div>
          </Carousel.Caption>

      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide}
          alt="First slide"
        />
        
          <Carousel.Caption>
          <div className='carousel-text'>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, ullam?</h3>
            <p> ~ Nulla vitae</p>
            </div>
          </Carousel.Caption>

      </Carousel.Item>
    
    </Carousel>
    </div>
  )
}

export default CarouselComp;

