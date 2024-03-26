import { createSlice } from "@reduxjs/toolkit";

let initialState ={
    todos:[],
    index:0
}
export const todosSlice =  createSlice({
    name:'todos',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            let newTodo = {
                complete:false,
                title:action.payload,
                id:state.index++
            }
            console.log(newTodo);
            state.todos.push(newTodo);
            console.log(state.todos);
        },
        editTodo:(state,action)=>{
            console.log(action.payload.text);
            console.log(action.payload.todo);
                state.todos = state.todos.map((todo)=>
                    {
                        if(todo.id==action.payload.todo.id){
                            todo.title = action.payload.text;
                            return todo;
                        }else{
                            return todo;
                        }
                    })
        },
        deleteTodos:(state,action)=>{
           state.todos =  state.todos.filter((todo)=>todo.id !== action.payload);
        },
        togglecomplete:(state,action)=>{
            state.todos = state.todos.map((todo)=>{
            if(todo.id===action.payload.id){
                todo.complete = !todo.complete
                return todo;
            }else{
                return todo;
            }
        })
        }
    }
})
export const {addTodo,editTodo,deleteTodos,togglecomplete} = todosSlice.actions;
export default todosSlice.reducer