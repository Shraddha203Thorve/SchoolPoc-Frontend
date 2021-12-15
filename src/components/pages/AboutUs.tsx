import React from 'react'
import { Link } from 'react-router-dom'
import SchoolImg from '../SchoolImg'
import Card from 'react-bootstrap/Card'

const AboutUs = () => {
    return (
        <div>


            <div className="AboutImg">
                <div className='left-float'>
                    <Link to='home' className="link">Home/</Link>
                </div>
                <div className="banner">
                    <h1>About Us</h1>
                </div>
            </div>

            <div className="contentWhite">
                <h2>Our Mission</h2>
                <p>The Mission of The LCPS for Children is to empower our children to achieve their greatest potential both as students and as members of their communities.</p>
            </div>

            <div className="bg-light-grey row">
                <div className="col-md-6 mt-3">
                    <h2 className="brand">History</h2>
                    <p className="align">We launched Learning Curve Public School in 2001 & since then have rapidly changed the face of Pre-Primary,Primary and Secondary education in the City. Our success as one of the leading education service providers raised the expectations of many hopeful parents, who were keen to see their children continue to blossom under our guidance.</p>
                </div>
                <div className="col-md-6 mt-3">
                    <h2 className="brand">Vision</h2>
                    <p className="align">Learning Curve Public School seeks to provide the best place for a child to learn, to grow and to evolve into a balanced and strong individual. The School intends to strive to become a second home for your child. The School located Hinjawadi Pune.</p>
                </div>
            </div>
            <div>
                <Card border="light" className="align shadow p-3 mb-5 bg-card rounded" >
                    {/* <Card.Header>Header</Card.Header> */}
                    <Card.Body>
                        <Card.Img variant="top" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZWR1Y2F0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" height="350px" />
                        <Card.Title>About school</Card.Title>
                        <Card.Text>
                        LCPS is the perfect location to deliver quality education. The school provides a clean and conductive atmosphere for the children to learn. The buildings are all modern and spacious and offer the students a very comfortable environment.The education system besides providing an all round education intellectually, socially, emotionally and physically also offers guidance in critical thinking, social openness and purposeful research. Students are given an opportunity to develop their own talent as well as to be aware of national and global issues.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
            {/* <SchoolImg/> */}
            {/* <p>About us page</p> */}
        </div>
    )
}

export default AboutUs
