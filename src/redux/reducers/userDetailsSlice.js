import { createSlice } from "@reduxjs/toolkit";
const initialState={
    age:null,
    gender:null,
    symptoms:null,
    issues:null,
    routes:[],
    selectedBodyPart:null,
}
const userDetailsSlice=createSlice({
    name:"userDetais",
    initialState,
    reducers:{
        setAgeInStore:(state,action)=>{
            state.age=action.payload;
        },
        setGenderInStore:(state,action)=>{
            state.gender=action.payload;
        },
        setSymptomInStore:(state,action)=>{
            state.symptoms=action.payload;
        },
        setIssueInStore:(state,action)=>{
            state.issues=action.payload;
        },
        setSelectedBodyPart:(state,action)=>{
            state.selectedBodyPart=action.payload;
        },
        addRoute:(state,action)=>{
            state.routes.push(action.payload);
        }
    }
})
export const{
    setAgeInStore,
    setGenderInStore,
    setSymptomInStore,
    setIssueInStore,
    setSelectedBodyPart,
    addRoute
}=userDetailsSlice.actions;
export default userDetailsSlice.reducer