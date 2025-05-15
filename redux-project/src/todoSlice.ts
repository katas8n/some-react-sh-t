// According to the name of the file 
// Here we will keep part that regards only TO:DO 
import { createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: number; 
    title: string;
    // descr: string;
    hasCompleted: boolean;
}

interface TodoState { 
    todos: Todo[]
}

const initialState: TodoState = {
    todos: [{
        id: 0,
        title: "Walk along the street with my dog!",
        hasCompleted: false
    }]
}

let nextId = 1;

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({
                id: nextId++,
                title: action.payload,
                hasCompleted: false
            }
        )}
        // deleteTodo:
        // completeTodo: 
    }
})

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;