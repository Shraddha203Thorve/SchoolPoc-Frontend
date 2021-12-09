import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { RiHome4Fill } from 'react-icons/ri'
import SocialFlow from './SocialFlow';
import { BsEnvelopeFill,BsFillTelephoneFill } from "react-icons/bs";
import logo from './logo.jpeg';

const Header = () => {
  return (
    <>
      <div className="mid-background">
        <div className="row">
          <div className="col-2">           
             <p><BsEnvelopeFill/> - lpcs@learningcurve.in</p>
             <p><BsFillTelephoneFill/> - 98566789003</p>
          </div>
          <div className="col-8 mt-2">
            <h2 className="brand">Learning Curve Public School</h2>
          </div>
          <img className=" col-2" src={logo} height={80} width={100} />
        </div>

      </div>
      <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="/home"><RiHome4Fill /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
          <SocialFlow />
        </Container>
      </Navbar>
    </>
  )
}

export default Header
