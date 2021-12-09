import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/col'
import { useNavigate } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
import { MainState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { setStudent } from '../../reducer/StudentReducer'
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false)
    const em = email
    let mail
    let history = useNavigate();
    const students = useSelector((state: MainState) => {
        if (state.student) { return state.student.value }
    }
    )
    const dispatch = useDispatch()

    const handleSubmit = async (e: React.MouseEvent) => {
        e.preventDefault()

        console.log('students')
        await axios.get(`http://localhost:4000/api/student/`)
            .then(({ data }) => dispatch(setStudent(data)))
            .catch(() => console.log('Error while fetching'))

        students && students.map((student) => (

            em == student.email ?
                // localStorage.setItem('name',student.name)
                (
                    localStorage.setItem('name', student.name),
                    localStorage.setItem('email', student.email),
                    localStorage.setItem('class', student.class),
                    localStorage.setItem('rollNo', String(student.rollNo)),
                    localStorage.setItem('photoid', student.photoid),
                    mail = student.email,
                    setLogin(true),
                    console.log(login),
                    console.log('inside')
                )
                :
                (setLogin(false))
            // localStorage.setItem('class',student.class),
            // // localStorage.setItem('rollNo',student.rollNo),
            // localStorage.setItem('photoid',student.photoid)        
        ))
        if (login==false)
            console.log('error')
        else
            history('/student')
    }
    return (
        <div>
            <Container className="d-flex mt-2">
                <Row className="m-auto align-self-center">
                    <Col>
                        <Card border="secondary" className="align shadow p-3 mb-5 bg-white rounded" >
                            {/* <Card.Header>Header</Card.Header> */}
                            <Card.Body>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                            We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit" onClick={handleSubmit}>
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Login
