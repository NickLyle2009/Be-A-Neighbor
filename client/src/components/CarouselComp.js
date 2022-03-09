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
            <h3>Such a nice wholesome way to go about helping your community!</h3>
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
            <h3>I've made so many friends using this app!</h3>
            <p> ~ John Doe </p>
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
            <h1>Couldn't recommend this app enough!</h1>
            <p> ~ Zoe Kravitz</p>
            </div>
          </Carousel.Caption>

      </Carousel.Item>
    
    </Carousel>
    </div>
  )
}

export default CarouselComp;

