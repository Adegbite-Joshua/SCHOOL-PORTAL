import { createSlice, current } from "@reduxjs/toolkit";

export const studentInformation = createSlice({
    name: 'student',
    initialState: {
        studentInformation: {},
        allStaffs: [],
        allStudents: [],
        staffFetchingState: true
    },
    reducers: {
        fetchStaff: (state, action)=>{
            Object.assign(state.studentInformation = action.payload)  
            console.log(current(state));         
        },
        fetchAllStaffs: (state, action)=>{
            Object.assign(state.allStaffs = action.payload)  
            console.log(current(state)); 
        },
        fetchAllStudents: (state, action)=>{
            Object.assign(state.allStudents = action.payload)  
            console.log(current(state)); 
        }
    }
})

export const {fetchStudent, fetchAllStaffs, fetchAllStudents} = studentInformation.actions

export default studentInformation.reducer