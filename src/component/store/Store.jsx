import {configureStore} from "@reduxjs/toolkit"
import ReducerTodo from "../TodoSlice"
export const Store = configureStore({
    reducer:{
        todos:ReducerTodo
    }
})