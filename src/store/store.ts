import { configureStore } from "@reduxjs/toolkit";
import AdmissionReducer from "../reducer/AdmissionReducer";
import StudentReducer from "../reducer/StudentReducer";

export const store=configureStore({
    reducer:{
        admission:AdmissionReducer,
        student:StudentReducer
    }
})

export type MainState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch