import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
    reducer : {
        // register kara diya reducer ko
        // counter is the name of the slice in counterSlice.jsx
        counter : counterReducer
    }
}) ; 