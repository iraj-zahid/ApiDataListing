import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import cartSlice from "./slices/cartSlice"
import modeSlice from "./slices/modeSlice";
import wantToReview from "./slices/wantToReviewSlice";

const reducers = combineReducers({
    cart: cartSlice,
    mode: modeSlice,
    wantToReview: wantToReview
   });
   const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: persistedReducer,
});
const persistor = persistStore(store);

export  {store, persistor};