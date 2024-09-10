import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload)  
        },
        deselect(state, action){
            state.splice(action.payload,1)
        },
        quantInc(state, action){
            state[action.payload].quant++
        },
        quantDec(state, action){
            if(state[action.payload].quant =+ 0){
                state[action.payload].quant--
            }
        },
        removeAll(state,action){
            return state = []
        }

    }

})
export const {add, deselect, quantInc, quantDec, removeAll} = cartSlice.actions;
export default cartSlice.reducer