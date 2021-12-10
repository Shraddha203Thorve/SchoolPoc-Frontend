import React from 'react'
import SchoolImg from '../SchoolImg'
import GoogleMap from './GoogleMap'
import Card from 'react-bootstrap/Card'
// import {
//     Box,
//     Container,
//     Row,
//     Column,
//     FooterLink,
//     Heading,
//   } from "./FooterStyle";

const ContactUs = () => {
    return (
        <div>
            <GoogleMap/>
            <p></p>
            <div className="row">
                    <div className="col-md-6 mt-3">
                        <Card border="secondary" className="align shadow p-3 m-3 bg-white rounded" >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <Card.Title className="brand heading">Address</Card.Title>
                                <Card.Text>
                                Hinjawadi Phase 1 Rd, Phase 1, Hinjewadi Rajiv Gandhi Infotech Park, Hinjawadi, Pune, Maharashtra 411057
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

                    <div className="col-md-6 mt-3">

                    <Card border="secondary" className="align shadow p-3 m-3 bg-white rounded" >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <Card.Title className="brand heading">Contact</Card.Title>
                                <Card.Text>
                                986004354/020-495966
                                <br></br>
                                icps.preprimary@learningcurve.in
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                
            {/* <Box> */}
           
        </div>
    )
}

export default ContactUs
