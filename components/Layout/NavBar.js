import React from 'react'
import Container from 'react-bootstrap/Container';
import { Col, Row, Button } from "react-bootstrap";

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <>
    {/* <Navbar collapseOnSelect expand="lg" style={{backgroundColor:"#F26722"}}>
        <Container>
            <Navbar.Brand href="/">
                <img style={{width:"150px"}} src={"/images/banner/XTRA-Logo.png"} alt="xtra logo"/>
            </Navbar.Brand>
        </Container>
        
    </Navbar> */}
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky='top' >
      <Container>
        <Navbar.Brand href="/">
                <img style={{width:"150px"}} src={"/images/banner/XTRA-Logo.png"} alt="xtra logo"/>
            </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        
          <Nav className="me-auto">
            <NavDropdown style={{marginRight:"35px"}} title="Categories" active id="collasible-nav-dropdown">
              <Row xs="3" lg="3" className='justify-content-center navitem mt-4'>
                <Col className='text-center' >
                  <a href='#'>
                  <img style={{width:"50px", }} src={"/images/banner/smartwatch.png"} alt="xtra logo"/> 
                  <span >Smartwatches</span></a>
                </Col>
                <Col className='text-center' >
                  <a href='#'>
                  <img style={{width:"50px", }} src={"/images/banner/smartwatch.png"} alt="xtra logo"/> 
                  <span >Smartwatches</span></a>
                </Col>
                <Col className='text-center' >
                  <a href='#'>
                  <img style={{width:"50px", }} src={"/images/banner/smartwatch.png"} alt="xtra logo"/> 
                  <span>Smartwatches</span></a>
                </Col>
              </Row>
              <Row xs="3" lg="3" className='justify-content-center navitem mt-4 mb-4'>
                <Col className='text-center' >
                  <a href='#'>
                  <img style={{width:"50px", }} src={"/images/banner/Audio.png"} alt="xtra logo"/> 
                  <span >Audio</span></a>
                </Col>
                <Col className='text-center' >
                  <a href='#'>
                  <img style={{width:"50px", }} src={"/images/banner/Router.png"} alt="xtra logo"/> 
                  <span >Modem& Router</span></a>
                </Col>
                <Col className='text-center' >
                  <a href='#'>
                  <img style={{width:"50px", }} src={"/images/banner/Power.png"} alt="xtra logo"/> 
                  <span>Power</span></a>
                </Col>
              </Row>
              
          </NavDropdown>
            {/* <NavDropdown style={{marginRight:"35px"}} title="Audio" active id="collasible-nav-dropdown">
              <NavDropdown.Item href="/products/audio/tws">Tws</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/audio/neckband">Neckband</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/audio/wired-earphone">Wired Earphone</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Headphone</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{marginRight:"35px"}} title="Phone" active id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">Feauture Phone</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Smart Phone</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Tablet</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{marginRight:"35px"}} title="Power" active id="collasible-nav-dropdown">
              <NavDropdown.Item href="/products/power/charger">Charger</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/products/power/cable">Cable</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown style={{marginRight:"35px"}} title="Modem & Router" active id="collasible-nav-dropdown">
              <NavDropdown.Item href="#">4G Pocket Router</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">4G Dongle</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Wifi Router</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Link style={{marginRight:"35px"}} active href="#">Offer</Nav.Link>
                <NavDropdown style={{marginRight:"35px"}} title="AboutUS" active id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/about">Company Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/about/store">Store Location</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
