
/* istanbul ignore file */

import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Student{
    _id:string
    name:string,
    dateofbirth:string,
    school:string,
    email:string,
    constact:number
    // rollNo:number,
    // photoid:string,
    // password:string
} 
interface StudentState{
    value:Student[]
}

const initialState: StudentState={
    value:[]
}

export const StudentReducer=createSlice({
    name:"student",
    initialState,
    reducers:{
        setStudent:(state,action:PayloadAction<Student[]>)=>{
            state.value=action.payload
        }
    }
})

export const {setStudent}=StudentReducer.actions
export default StudentReducer.reducer