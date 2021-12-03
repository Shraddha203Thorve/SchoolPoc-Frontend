import React from 'react'
import SchoolImg from './SchoolImg'
import Marquee from "react-fast-marquee";
import { FaTwitter } from 'react-icons/fa'
import Card from 'react-bootstrap/Card'



const Home = () => {
    return (
        <div>
            <div className='bg-light-grey'>
                <Marquee>***Admissions open for year 2022***</Marquee>
            </div>
            <SchoolImg />
         
            <div className="mid-background shadow p-3 mb-5  rounded mt-3">
                       <p>React Hook useEffect has a missing dependency: 'dispatch'. Either include it or remove the dependency array</p>
            </div>

            <div className="container-fluid mt-5 ">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <Card border="secondary" className="align shadow p-3 mb-5 bg-white rounded" >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <Card.Title>Welcome to LCPS</Card.Title>
                                <Card.Text>
                                    Top schools in Pune have always attracted students from all over the country and abroad, and in such an environment The Orbis Schools are the preferred choice of parents seeking admission to good schools in Pune.

                                    The school's name, Orbis, which comes from orb, is a metaphor for the world. And our aim as educators is to groom students in harmony with global progress. Today, The Orbis Schools are recognized as one of the best schools in Pune.

                                    As the world becomes increasingly flat, and cycles of change grow ever shorter, the good schools in Pune and the rest of the country must acquire the ability to keep up. Tomorrow's winners need to be able to bring the change rather than merely react to it.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}

                    <div className="col-md-6 mt-3">

                        <img
                            // className="d-block w-100"
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            height={350} width={350}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mt-3">

                        <img
                             className="m-2"
                            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNjaG9vbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
                            height={250} width={350}
                        />
                    </div>

                    <div className="col-md-6 mt-3">
                        <Card border="secondary" className="align shadow p-3 mb-5 bg-white rounded" >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <Card.Title>Celebrate Learning</Card.Title>
                                <Card.Text>
                                    Celebrate Learning at The Orbis Schools is a process designed to turn work into play. Limitless opportunities to explore and experiment, get involved in fests and concerts, work for exhibitions and workshops, participate in trips and sports, in an atmosphere which is stress-free, secure, stimulating and rewarding will make learning one's experience of a celebratory kind.
                                </Card.Text>
                            </Card.Body>
                        </Card>

                    </div>

                    {/* <hr className="clearfix w-100 d-md-none pb-0" /> */}



                </div>
            </div>
        </div>
    )
}

export default Home
