import {createSlice} from "@reduxjs/toolkit"

const initialState = false;

const isLoginSlice = createSlice({
    name:'isLogin',
    initialState,
    reducers:{
        isLogin(state, action){
            return state = action.payload
        }
    }
})
export const {isLogin} = isLoginSlice.actions;
export default isLoginSlice.reducer
