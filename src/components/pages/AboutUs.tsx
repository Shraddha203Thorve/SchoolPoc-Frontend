import React from 'react'
import { Link } from 'react-router-dom'
import SchoolImg from '../SchoolImg'

const AboutUs = () => {
    return (
        <div>
            <div className='left-float'>
                <Link to='home'>Home/</Link>
            </div>
            <div className="AboutImg">
                <div className="banner">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="contentWhite">
                <h2>Our Mission</h2>
                <p>The Mission of The Bronx Charter School for Children is to empower our children to achieve their greatest potential both as students and as members of their communities.</p>
            </div>
            <div className="grey-back row">
            <div className="col-md-6 mt-3">
              <h2 className="brand">History</h2>
                <p className="align">We launched Learning Curve Public School in 2001 & since then have rapidly changed the face of Pre-Primary,Primary and Secondary education in the City. Our success as one of the leading education service providers raised the expectations of many hopeful parents, who were keen to see their children continue to blossom under our guidance.</p>
            </div>
            <div className="col-md-6 mt-3">
                <h2 className="brand">Vision</h2>
                <p className="align">Learning Curve Public School seeks to provide the best place for a child to learn, to grow and to evolve into a balanced and strong individual. The School intends to strive to become a second home for your child. The School located Hinjawadi Pune.</p>
            </div>
                
            </div>
            
            {/* <SchoolImg/> */}
            {/* <p>About us page</p> */}
        </div>
    )
}

export default AboutUs
