// here we will keep reducers and types because it's our global store

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    }
})