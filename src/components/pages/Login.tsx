/* istanbul ignore file */
import React, { useState } from 'react'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'
// import {useHistory} from 'react-router-dom'
import { MainState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { setStudent } from '../../reducer/StudentReducer'
import axios from 'axios'

const Login = () => {
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    // const [login, setLogin] = useState(false)
    // const em = email
    // let mail
    // let history = useNavigate();
    // const students = useSelector((state: MainState) => {
    //     if (state.student) { return state.student.value }
    // }
    // )
    // const dispatch = useDispatch()

    // const handleSubmit = async (e: React.MouseEvent) => {
    //     e.preventDefault()

    //     console.log('students')
    //     await axios.get(`http://localhost:4000/api/student/`)
    //         .then(({ data }) => dispatch(setStudent(data)))
    //         .catch(() => console.log('Error while fetching'))

    //     students && students.map((student) => (

    //         em == student.email ?
    //             // localStorage.setItem('name',student.name)
    //             (
    //                 localStorage.setItem('name', student.name),
    //                 localStorage.setItem('email', student.email),
    //                 localStorage.setItem('class', student.class),
    //                 localStorage.setItem('rollNo', String(student.rollNo)),
    //                 localStorage.setItem('photoid', student.photoid),
    //                 mail = student.email,
    //                 setLogin(true),
    //                 console.log(login),
    //                 console.log('inside')
    //             )
    //             :
    //             (setLogin(false))
    //         // localStorage.setItem('class',student.class),
    //         // // localStorage.setItem('rollNo',student.rollNo),
    //         // localStorage.setItem('photoid',student.photoid)        
    //     ))
    //     if (login==false)
    //         console.log('error')
    //     else
    //         history('/student')
    // }
    return (
        <div>
           
        </div>
    )
}

export default Login
