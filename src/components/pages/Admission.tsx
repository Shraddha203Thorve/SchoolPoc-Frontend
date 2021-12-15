import React, { ReactElement } from 'react'
import SchoolImg from '../SchoolImg'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { MainState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { setAdmissionGrades } from '../../reducer/AdmissionReducer'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import EnquiryModal from './EnquiryModal'


const Admission = (): ReactElement => {
    const [modalShow, setModalShow] = useState(false);
    const grades = useSelector((state: MainState) => {
        if (state.admission) { return state.admission.value }
    }
    )
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('http://localhost:4000/api/admission')
            .then(({ data }) => dispatch(setAdmissionGrades(data)))
            .catch(() => console.log('Error while fetching'))
    }, [])


    return (
        <div>
            {/* <SchoolImg/> */}


            <div className="AdmissionImg">
                <div className='left-float'>
                    <Link to='home' className="link">Home/</Link>
                </div>
                <div className="banner">
                    <h1>Admission</h1>
                </div>
            </div>

            <h5>Grades Available!!!</h5>

            <div className='md'>
                <Link to="/pre-primary">Pre-primary</Link>
                <br></br>
                <Link to="/primary">Primary</Link>
                <br></br>
                <Link to="/secondary">Secondary</Link>
            </div>

            <div className="md mt-4">
                <Button variant="warning" data-testid='button' onClick={() => setModalShow(true)}>
                    Enquire Now
                </Button>

                <EnquiryModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
            </div>

           

            {/* {grades.map((grade)=>(
                <>
                <p>{grade.category}</p>
                {grade.options.map((option)=>{
                    
                  <p>{option.fees}</p>
                  console.log(option.fees)
                  console.log(option.grade)
                })}
                </>
            ))} */}


        </div>
    )
}

export default Admission


// {/* <div>
// <div className="row m-5">
//     <div className="align col-md-4 mt-md-0 mt-3">
//         <Card border="secondary" className="align shadow p-3 mb-5 bg-white rounded" >
//             {/* <Card.Header>Header</Card.Header> */}
// <Card.Body>
//     <Card.Title><Link to="/login" className="link">Student Login</Link></Card.Title>
//     {/* <Card.Text>
//                     Celebrate Learning at The Orbis Schools is a process designed to turn work into play. Limitless opportunities to explore and experiment, get involved in fests and concerts, work for exhibitions and workshops, participate in trips and sports, in an atmosphere which is stress-free, secure, stimulating and rewarding will make learning one's experience of a celebratory kind.
//                 </Card.Text> */}
// </Card.Body>
//         </Card >
//     </div >



//     <div className="align col-md-4 mt-md-0 mt-3">
//         <Card border="secondary" className="align shadow p-3 mb-5 bg-white rounded" >
//             {/* <Card.Header>Header</Card.Header> */}
//             <Card.Body>
//                 <Card.Title>Teacher Login</Card.Title>
//                 {/* <Card.Text>
//                     Celebrate Learning at The Orbis Schools is a process designed to turn work into play. Limitless opportunities to explore and experiment, get involved in fests and concerts, work for exhibitions and workshops, participate in trips and sports, in an atmosphere which is stress-free, secure, stimulating and rewarding will make learning one's experience of a celebratory kind.
//                 </Card.Text> */}
//             </Card.Body>
//         </Card>
//     </div>

// </div >
// </div > * /}
