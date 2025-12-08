import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : 'counter' , 
    initialState : {
        value : 0
    } , 
    reducers : {
        // these functions are the actions
        increment : state => {
            state.value += 1
        } ,
        decrement : state => {
            state.value -= 1
        } ,
        incrementByAmount : (state ,action) => {
            state.value += Number(action.payload)
        } ,
        reset : state => {
            state.value = 0 
        }
    }
}) 


export const {increment ,decrement ,incrementByAmount ,reset} = 
counterSlice.actions 

export default counterSlice.reducer

