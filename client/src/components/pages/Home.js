import React from 'react'
import Carousel from 'react-bootstrap/Carousel'


export default function Home() {
  return (
    <div className="container">
      <h1 className='text-center fw-bold'>WHO WE ARE</h1>
      <div>
        <p> Welcome to Be a Neighbor.  We are here to connect people whe are in need with those that have supplies that they can/want to provide. If you are in need it doesnt matter what curveballs life has thrown at you we are here to help you connect with someone who has got it.   
        </p>
        <p>On the other hand if you have ever wondered about when you dontate to a big company/charity and you wish you knew if that donation really did go to someone who needed it, we are here for you as well.  Here you know and connect to the people that need your donation directly.  
        </p>
      </div>


      <div style={{width:'300px', justifyContent:'center', alignItems:'center', marginLeft: 'auto', marginRight: 'auto'}}>
        <h1 style={{textAlign: 'center'}}>Testimonials</h1>
        <div>
        <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block w-100"
            src="https://media.mixbook.com/images/templates/97_1_0_m.jpg"
            alt="One"
          />
          <Carousel.Caption>
            <h3 style={{color: 'black'}}>Label for first slide</h3>
            <p style={{color: 'black'}}>Sample Text for Image One</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block w-100"
          src="https://media.mixbook.com/images/templates/97_1_0_m.jpg"
            alt="Two"
          />
          <Carousel.Caption>
            <h3 style={{color: 'black'}}>Label for second slide</h3>
            <p style={{color: 'black'}}>Sample Text for Image Two</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
        
      </div>
    </div>

  )
}
