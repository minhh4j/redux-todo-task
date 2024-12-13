import { createSlice } from "@reduxjs/toolkit";



const todoSlice = createSlice({
    name:"todos",
    initialState:{
        value:[]
    },
    reducers:{
        addTodo:(state , action) => {

            state.value.push({id:state.value.length , text: action.payload , color:"#90ee90"})
        } ,
        changeColor:(state,action) => {
            state.value = state.value.map((item) => item.id === action.payload ? {...item,color:"#228b22"} : item) 
        },
        deleteTodo:(state , action) => {
            state.value = state.value.filter((item) => item.id != action.payload)
        }
    }
})

export const {addTodo , changeColor , deleteTodo}  = todoSlice.actions;
export default todoSlice.reducer;