import {createSlice} from "@reduxjs/toolkit"

const initialState = false;

const modeSlice = createSlice({
    name:'mode',
    initialState,
    reducers:{
        modeSwitch(state, action){
            return state = action.payload
        }
    }
})
export const {modeSwitch} = modeSlice.actions;
export default modeSlice.reducer

