import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add(state, action){
            state.push(action.payload)  
            // console.log(cartSlice.reducer)
        },
        deselect(state, action){
            state.splice(action.payload,1)
        },
        quantInc(state, action){
            state[action.payload].quant++    
            
            // individual value total
            const actualPrice = state[action.payload].data.price
            state[action.payload].total += actualPrice
        },
        quantDec(state, action){
            if(state[action.payload].quant > 1){
                state[action.payload].quant--
            }

            // individual value total decreasing 
            const actualPrice = state[action.payload].data.price
            if(Number(state[action.payload].total).toFixed(2) > state[action.payload].data.price){
                state[action.payload].total -= actualPrice
            }
        },
        removeAll(state,action){
            return state = []
        },
    }
})
export const {add, deselect, quantInc, quantDec, removeAll} = cartSlice.actions;
export default cartSlice.reducer