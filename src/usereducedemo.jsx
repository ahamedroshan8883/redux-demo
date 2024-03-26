import React, { useReducer,useState } from "react"

export default function Usereducedemo(){
    let initialvalue = {number1:0,number2:0};
    const calculate = (state,action)=>{
        switch(action.type){
            case "add":
                return state = action.payload1+action.payload2;
            case "sub":
                return state = action.payload1-action.payload2;
            case "mul":
                return state = action.payload1*action.payload2;
            case "div":
                return state = action.payload1/action.payload2;
            default :
                return state;
        }
    }
    let [state,dispatch] = useReducer(calculate,0);
    let [method,setMethod] = useState("");
    let [numbers,setNumbers] = useState(initialvalue);
    console.log(method);
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type:method,payload1:numbers.number1,payload2:numbers.number2})
    }
    const handleChanges = (e)=>{
        const {name,value} =e.target;
        setNumbers({...numbers,[name]:Number(value)});
        console.log(numbers);
    }
  return (<>
    <h1>usereducedemo</h1>
        <form onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="add">Addition</label>
                <input type="radio" name="cal" id="" value="add" onChange={(e)=>setMethod(e.target.value)}/><br/>
            <label htmlFor="sub">subraction</label>
                <input type="radio" name="cal" id="" value="sub" onChange={(e)=>setMethod(e.target.value)} /><br/>
            <label htmlFor="mul">Multiplication</label>
                <input type="radio" name="cal" id=""value="mul" onChange={(e)=>setMethod(e.target.value)} /><br/>
            <label htmlFor="div">Division</label>
                <input type="radio" name="cal" id=""value="div" onChange={(e)=>setMethod(e.target.value)} /><br/>

            <label htmlFor="">Enter number1</label><input type="number" name="number1" value={numbers.number1} onChange={(e)=>handleChanges(e)}/><br/>
            <label htmlFor="">Enter number2</label><input type="number" name="number2" value={numbers.number2} onChange={(e)=>handleChanges(e)}/><br/>
            <button type="submit">Calculate</button>
        </form>
        <p>{state}</p>
  </>)
};