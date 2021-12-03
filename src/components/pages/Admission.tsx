import React, { ReactElement } from 'react'
import SchoolImg from '../SchoolImg'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { MainState } from '../../store/store'
import {useSelector,useDispatch} from 'react-redux'
import { setAdmissionGrades } from '../../reducer/AdmissionReducer'


const Admission = ():ReactElement => {

   const grades = useSelector((state:MainState) => state.admission.value)
   const dispatch =useDispatch()

   useEffect(() => {      
      axios.get('http://localhost:4000/api/admission/')
      .then(({data})=>dispatch(setAdmissionGrades(data)))
      .catch(()=>console.log('Error while fetching'))
   }, [])

    return (
        <div>
            {/* <SchoolImg/> */}
            <p>Admission page</p>
            <h5>Grades Available!!!</h5>
            <div className='md'>
            <Link to="/pre-primary">Pre-primary</Link>
            <br></br>
            <Link to="/primary">Primary</Link>
            <br></br>
            <Link to="/secondary">Secondary</Link>
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
