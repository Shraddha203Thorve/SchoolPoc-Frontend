import React from 'react'
import SchoolImg from '../SchoolImg'
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
            <SchoolImg />
            <p>Contact us page</p>
            {/* <Box> */}
            <footer className="page-footer font-small blue pt-4 back" >
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Phone</h5>
                            <p>Pre-Primary</p>
                            <p>986004354/020-495966</p>
                            <p>Primary and Secondary</p>
                            <p>020-223234/983045697</p>
                        </div>

                        <hr className="clearfix w-100 d-md-none pb-0" />

                        <div className="col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Email</h5>
                            <p>Pre-Primary</p>
                            <p>986004354/020-495966</p>
                            <p>Primary and Secondary</p>
                            <p>020-223234/983045697</p>
                        </div>

                        <div className="col-md-4 mt-md-0 mt-3">
                            <h5 className="text-uppercase">Address</h5>
                            <p>Pre-Primary</p>
                            <p>986004354/020-495966</p>
                            <p>Primary and Secondary</p>
                            <p>020-223234/983045697</p>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}

export default ContactUs
