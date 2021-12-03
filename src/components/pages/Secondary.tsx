import React from 'react'
import SchoolImg from '../SchoolImg'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { MainState } from '../../store/store'
import {useSelector,useDispatch} from 'react-redux'
import { setAdmissionGrades } from '../../reducer/AdmissionReducer'
import Table from 'react-bootstrap/Table'

const Secondary = () => {
    
    const grades = useSelector((state:MainState) => state.admission.value)
    const dispatch =useDispatch()

    useEffect(() => {      
        axios.get('http://localhost:4000/api/admission/Secondary')
        .then(({data})=>dispatch(setAdmissionGrades(data)))
        .catch(()=>console.log('Error while fetching'))
     }, [])

    return (
        <div>
            <SchoolImg/>
            <p>Secondary</p>
            <div className="wd">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Grade</th>
                        <th>Fees</th>
                        <th>Seats</th>
                    </tr>
                </thead>
                <tbody>
                    {grades.map((grade) => (
                        <>
                            {grade.options.map((option) =>                         
                                    <tr>
                                        <td>{option.grade}</td>
                                        <td>{option.fees}</td>
                                        <td>{option.seats}</td>
                                    </tr>                                   
                            )}
                        </>
                    ))}

                </tbody>
            </Table>

            </div>
           
        </div>
    )
}

export default Secondary
