
/* istanbul ignore file */

import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { MainState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { setStudent } from '../../reducer/StudentReducer'
import axios from 'axios'
import validator from 'validator'
import Swal from 'sweetalert2'

const EnquiryModal = (props: any) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [date, setDate] = useState('')
    const [school, setSchool] = useState('')
    const [phone, setPhone] = useState('')
    const emailerror = document.getElementById('emailerror')
    const phoneerror = document.getElementById('phoneerror')
    const studName = document.getElementById('name')

    const students = useSelector((state: MainState) => {
        if (state.student) { return state.student.value }
    }
    )
    const dispatch = useDispatch()

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()

        const validEmail=validateEmail()
        const validPhone=validatePhone()

        console.log('students')
        if(validEmail || validPhone)
        {
        await axios.post(`http://serverschool-env.eba-pmxbydww.ap-south-1.elasticbeanstalk.com/api/student/register`, {
            name: name,
            dateofbirth: date,
            school: school,
            contact: phone,
            email: email,

        })
            .then(() => Swal.fire({
                icon: 'success',
                title: 'Your form is submitted,Thank You!!',
                showConfirmButton: false,
                width:300,
                timer: 3000
              })
              
              )
            .catch(() => console.log('Error while fetching'))
       
        }
        props.onHide()
       
    }

    function validateEmail() {
        if (emailerror) {
            if (validator.isEmail(email)) {
                emailerror.innerHTML = " "
                return true
            }
            else {
                emailerror.innerHTML = "Enter valid email"
                return false
            }
        }
    }

    function validatePhone() {
        if (phoneerror) {
            if (validator.isMobilePhone(phone)) {
                phoneerror.innerHTML = " "
                return true
            }
            else {
                phoneerror.innerHTML = "Enter valid contact no"
                return false
            }
        }
    }
    return (
        <div>
            <Modal
                {...props}

                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Enquiry Form
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Full Name of Student</Form.Label>
                            <Form.Control type="name" id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter full name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} placeholder="MM/DD/YYYY" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Current school</Form.Label>
                            <Form.Control type="name" value={school} onChange={(e) => setSchool(e.target.value)} placeholder="School Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                            <p id='emailerror' className='text-danger font-weight-bold'></p>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contact No</Form.Label>
                            <Form.Control type="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Contact no" />
                            <p id='phoneerror' className='text-danger font-weight-bold'></p>
                        </Form.Group>


                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button data-testid='close' variant="warning" onClick={props.onHide}>Close</Button>
                    <Button data-testid="submit" variant="info" onClick={handleSubmit}>Save</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EnquiryModal
