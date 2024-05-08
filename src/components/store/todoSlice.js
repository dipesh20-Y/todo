import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:1, text:"Hello"},]
}


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
            console.log(todo)
            
            
        },
        removeTodo: (state, action)=>{
            state.todos= state.todos.filter((todo)=>todo.id!= action.payload)
        },

        editTodo:(state, action)=>{
            const {id, editedText}= action.payload;
            const todoToUpdate = state.todos.find(todo=> todo.id ==id)
            if(todoToUpdate){
                todoToUpdate.text= editedText
            }
        }

    }
})

export const {addTodo, removeTodo, editTodo } = todoSlice.actions

export default todoSlice.reducer