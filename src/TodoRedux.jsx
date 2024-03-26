import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo,editTodo,deleteTodos,togglecomplete } from "./TodoSlice";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function TodoRedux(){
    const dispatch = useDispatch();
    let todos = useSelector((state)=>state.todo.todos)
    let[text,setText] = useState("");
    let [isEditable,setIseditable] = useState(false);
    let [todo,setTodo] = useState({});
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(!isEditable){
            dispatch(addTodo(text));
            setText("");
        }else{
            dispatch(editTodo({todo,text}))
            setText("");
            setIseditable(false);
        }
    }
    const handleEdit = (todo)=>{
        setText(todo.title);
        setIseditable(true);
        setTodo(todo)
    }
  return (<>
    <h1>TodoRedux</h1>
    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        <button type="submit">Sumbit</button>
    </form>
    {todos.length>0?
    <ul style={{listStyle:"none"}}>
        {todos.map((todo)=>
        <li key={todo.id}>
            <input type="checkbox" name="" id="" onChange={()=>dispatch(togglecomplete(todo))}/>
            {todo.complete ?(<><strike>{todo.title}</strike>&nbsp;
            <button onClick={()=>dispatch(deleteTodos(todo.id))}><FaTrashCan/></button>&nbsp;<button onClick={()=>handleEdit(todo)}><FaEdit/></button></>):(<>
            <p style={{display:"inline"}}>{todo.title}</p>&nbsp;
            <button onClick={()=>dispatch(deleteTodos(todo.id))}><FaTrashCan/></button>&nbsp;<button onClick={()=>handleEdit(todo)}><FaEdit/></button></>)}
            </li>
        )}
    </ul>:'No data Found'}
    
  </>)
};