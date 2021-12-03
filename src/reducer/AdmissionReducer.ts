import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface Option{
    _id:string,
    grade:string,
    fees:number,
    seats:number
}

interface Grade{
    _id:string
    category:string,
    options:Array<Option>
} 
interface AdmissionState{
    value:Grade[]
}

const initialState: AdmissionState={
    value:[]
}
export const AdmissionReducer=createSlice({
    name:"admission",
    initialState,
    reducers:{
        setAdmissionGrades:(state,action:PayloadAction<Grade[]>)=>{
            state.value=action.payload
        }
    }
})

export const {setAdmissionGrades}=AdmissionReducer.actions
export default AdmissionReducer.reducer