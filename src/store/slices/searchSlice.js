import {createSlice} from "@reduxjs/toolkit"

const initialState = null

const searchSlice = createSlice({
    name:'searchValue',
    initialState,
    reducers:{
        searchValue(state, action){
         return state = action.payload
        },
        ProductUnavailableMessage(state, action){
         return state = action.payload
        }
    }
})
export const {searchValue, ProductUnavailableMessage} = searchSlice.actions;
export default searchSlice.reducer

