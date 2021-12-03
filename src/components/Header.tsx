import React from 'react'
import { Navbar,Nav, Container } from 'react-bootstrap'
import {RiHome4Fill} from 'react-icons/ri'
import SocialFlow from './SocialFlow';

const Header = () => {
    return (  
      <>      
      <div className="mid-background">
        <div className="row">
        <h2 className="col-10 brand">Learning Curve Public School</h2>
        <img className=" col-2"src="https://image.freepik.com/free-vector/luxury-university-logo-design_139869-120.jpg" height={80} width={100} />
        </div>
     
      </div>
        <Navbar bg="light" variant="light">
          <Container>
          <Navbar.Brand href="/home"><RiHome4Fill /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>         
                <SocialFlow/>          
          </Container>
        </Navbar>
        </>
    )
}

export default Header
