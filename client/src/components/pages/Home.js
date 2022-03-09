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
        <p> Welcome to Be a Neighbor.  We are here to connect people whe are in need with those that have supplies that they can/want to provide. If you are in need it doesn't matter what curveballs life has thrown at you we are here to help you connect with someone who has got it.   
        </p>
        <p>On the other hand if you have ever wondered about when you donate to a big company/charity and you wish you knew if that donation really did go to someone who needed it, we are here for you as well.  Here you know and connect to the people that need your donation directly.  
        </p>
      </div> */}
      <div className="jumbotron">
        <Container className='jumbo-text'>
        <h1 className='text-center fw-bold '>Who We Are</h1>
          <p className="">Welcome to Be a Neighbor. We are here to connect people who are in need with those that have items that they would like to donate. We know that life can throw you curveballs and you may need something that is out of your reach. We are here to help connect you with someone who has what you are looking for, or is willing to help</p>
          <hr className="my-4"/>
          <p>On the other hand Sometimes we may have more than we need and would like to share what we have with others, we can help. If you are hesitant to donate to a big corporate charity because you wonder what happens to your donated items, we are here for you as well. At Be A Neighbor, our mission is to connect donors and recipients in their community.  We are here for people who would like to have a more intimate experience. </p>
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
                To become part of the Be A Neighbor community you must create an account.  Provide just a little bit of information about yourself and you will be able to become a member of the Be A Neighbor family.
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
                Once you are member of the Be A Neighbor community, you have the opportunity to select Request an Item, Donate an items, or both.  You can provide a simple description or you can go into greater detail when making a submission. Please keep in mind Be A Neighbor is a donation site and not a commerce sight. If you wish to sell your item, there are other places to do so.
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
                As a member you can search through requests and donations on the message board. Once you have found a posting on the Be A Neighbor board that you fits yor need, or you feel you can accommodate, you will have the option to contact the individual who made the post.  Once you feel comfortable with each other you can make plans for a pick up or a delivery. 
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
