import React from 'react'
import { Carousel } from 'react-responsive-carousel';

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


      <div>
        <h2 className='text-center fw-bold'>Testimonials</h2>
        <Carousel>
                <div>
                    {/* <img src="assets/1.jpeg" /> */}
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    {/* <img src="assets/2.jpeg" /> */}
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    {/* <img src="assets/3.jpeg" /> */}
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
      </div>
    </div>

  )
}
