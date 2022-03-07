import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaGithub, FaTwitterSquare, FaLinkedin } from 'react-icons/fa';
// import { FcHome } from 'react-icons/fc';
// import { Link } from 'react-router-dom';
import home from '../images/home.png'
function Header() {
  return(
    <>
  <Container>
    <div className='main-header'>
    <Row>
      <Col>
      <h1 className='fw-bold'><img src={home} alt="home" className='img-fluid' /> Be A Neighbor</h1>
        
      </Col>
      <Col className='icons'>
        <h2 className='header-icons'>
          <a href='https://github.com/NickLyle2009/Be-Link-Neighbor'  className='i' target="_blank">
            <FaTwitterSquare />
          </a>
          <a href='https://github.com/NickLyle2009/Be-Link-Neighbor'  className='i' target="_blank">
            <FaLinkedin />
          </a>
          <a href='https://github.com/NickLyle2009/Be-Link-Neighbor'  className='i' target="_blank">
            <FaGithub />
          </a>
        </h2>
      </Col>
    </Row>
  </div>
  </Container>

  </>
  )
}

export default Header;

