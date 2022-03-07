import React from 'react';
import Footer from '../Footer';
import Copyright from '../Copyright';
import CarouselComp from '../CarouselComp';
import { MdAccountCircle } from 'react-icons/md';
import { BsFillReplyFill, BsFillFileEarmarkPostFill } from 'react-icons/bs';
import { Col, Container, Row } from 'react-bootstrap';

export default function Home() {
  return (
    <div className="">
      {/* <h1 className='text-center fw-bold '>WHO WE ARE</h1> */}
      {/* <div className='container'>
        <p> Welcome to Be a Neighbor.  We are here to connect people whe are in need with those that have supplies that they can/want to provide. If you are in need it doesnt matter what curveballs life has thrown at you we are here to help you connect with someone who has got it.   
        </p>
        <p>On the other hand if you have ever wondered about when you dontate to a big company/charity and you wish you knew if that donation really did go to someone who needed it, we are here for you as well.  Here you know and connect to the people that need your donation directly.  
        </p>
      </div> */}
      <div className="jumbotron">
        <Container className='jumbo-text'>
        <h1 className='text-center fw-bold '>Who We Are</h1>
          <p className="">Welcome to Be a Neighbor. We are here to connect people who are in need with those that have supplies that they can/want to provide. If you are in need it doesnt matter what curveballs life has thrown at you we are here to help you connect with someone who has got it</p>
          <hr className="my-4"/>
          <p>On the other hand if you have ever wondered about when you dontate to a big company/charity and you wish you knew if that donation really did go to someone who needed it, we are here for you as well. Here you know and connect to the people that need your donation directly.</p>
          </Container>
      </div>

      <div className='how-it-works-body'>
        <Container>
            <h1 className='text-center how-it-works'>
              How it works
            </h1>
        <Row>

          <Col>
            <div className='instruction'>
              <div className='instruction-header1'>
                <h3 className='text-center instruction-title'>Make An Account</h3>
                <div className='instruction-icons'>
                  <MdAccountCircle/>
                </div>
              </div>
              <div className='instruction-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum, iusto rem ea assumenda ut quaerat libero fugit aut magnam.
              </p>
              </div>
            </div>
          </Col>

          <Col>
          <div className='instruction'>
            <div className='instruction-header2'>
                <h3 className='text-center instruction-title'>Make A Post</h3>
                <div className='instruction-icons'>
                    <BsFillFileEarmarkPostFill/>
                  </div>
              </div>    
              <div className='instruction-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum, iusto rem ea assumenda ut quaerat libero fugit aut magnam.
              </p>
              </div>
            </div>
          </Col>

          <Col>
          <div className='instruction'>
            <div className='instruction-header3'>
              <h3 className='text-center instruction-title'>Reply To A Post</h3>
              <div className='instruction-icons'>
                  <BsFillReplyFill/>
                </div>
                </div>
              <div className='instruction-text'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ipsum, iusto rem ea assumenda ut quaerat libero fugit aut magnam.
              </p>
              </div>
            </div>
          </Col>

        </Row>
        </Container>
      </div>
      

      <div className='carousel-section'>
        <h1 className='testimonials-h text-center'>Testimonials</h1>
        <CarouselComp/>
      </div>
      
      <Footer></Footer>
      <Copyright></Copyright>
    </div>

  )
}
