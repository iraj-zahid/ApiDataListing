import { createSlice } from "@reduxjs/toolkit";
const initialState = []
const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        // adding item
        add(state, action){
            state.push(action.payload)  
        },
        // delete item
        deselect(state, action){
            state.splice(action.payload,1)
        },
        quantInc(state, action){
            state[action.payload].quant++    
            
            // individual value total
            const actualPrice = parseInt(state[action.payload].data.price)
            state[action.payload].total += actualPrice
          
        },
        quantDec(state, action){
            if(state[action.payload].quant > 1){
                state[action.payload].quant--
            }

            // individual value total decreasing 
            const actualPrice = parseInt(state[action.payload].data.price)
            console.log(typeof state[action.payload].total)
            console.log(typeof actualPrice)
            if(Number(state[action.payload].total).toFixed(2) > parseInt(state[action.payload].data.price)){
                state[action.payload].total -= actualPrice
            }
        },
        // clear all cart item
        removeAll(state,action){
            return state = []
        },
    }
})
export const {add, deselect, quantInc, quantDec, removeAll} = cartSlice.actions;
export default cartSlice.reducer