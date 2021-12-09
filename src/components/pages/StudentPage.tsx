import React from 'react'
import {Navbar, Nav, NavItem,Container} from 'react-bootstrap';



const StudentPage = () => {
    return (
        <div>
            <p>Student Page</p>
            <p>{localStorage.getItem('name')}</p>
            <p>{localStorage.getItem('email')}</p>
            <p>{localStorage.getItem('class')}</p>
            <p>{localStorage.getItem('rollNo')}</p>
            <Navbar bg="light" variant="light" >
        <Container>
          <Navbar.Brand href="/home">Home</Navbar.Brand>
          <Nav className="me-auto flex-column fixed">
            <Nav.Link href="/about">About us</Nav.Link>
            <Nav.Link href="/admission">Admission</Nav.Link>
            <Nav.Link href="/contact">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </div>
    )
}

export default StudentPage
