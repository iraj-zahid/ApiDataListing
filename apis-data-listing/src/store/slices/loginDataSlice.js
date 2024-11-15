import {createSlice} from "@reduxjs/toolkit"

const initialState = null;

const loginDataSlice = createSlice({
    name:'loginData',
    initialState,
    reducers:{
        loginData(state, action){
            return state = action.payload
        }
    }
})
export const {loginData} = loginDataSlice.actions;
export default loginDataSlice.reducer
