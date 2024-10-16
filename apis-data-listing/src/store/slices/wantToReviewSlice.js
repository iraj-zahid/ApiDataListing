import {createSlice} from "@reduxjs/toolkit"

const initialState = false;

const wantToReviewSlice = createSlice({
    name:'wantToReview',
    initialState,
    reducers:{
        isReview(state, action){
            return state = action.payload
        }
    }
})
export const {isReview} = wantToReviewSlice.actions;
export default wantToReviewSlice.reducer

