import {createSlice} from "@reduxjs/toolkit"

const initialState = false;

const isSignupSlice = createSlice({
    name:'isSignup',
    initialState,
    reducers:{
        isSignup(state, action){
            return state = action.payload
        }
    }
})
export const {isSignup} = isSignupSlice.actions;
export default isSignupSlice.reducer
