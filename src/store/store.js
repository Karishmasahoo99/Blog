import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from './authSlice'

const store=configureStore({
    reducer: {
        user:AuthReducer
    }
})

export default store;