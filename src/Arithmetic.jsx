import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {add,sub,mul,div} from './ArithmeticSlice'

export default function Arithmetic(){
    const data = useSelector((state)=>state.arithmetic);
    let initialState = {
      number1:0,
      number2:0
    }
    const dispatch = useDispatch();
    let [numbers,setNumbers] = useState(initialState);
    let [method,setMethod] = useState("")
    const handeleSubmit = (e,method)=>{
        e.preventDefault();
        console.log(method);
        let number1 = numbers.number1;
        let number2 = numbers.number2;
        switch(method){
          case "add":
            dispatch(add({number1,number2}));
            break;
          case "sub":
            dispatch(sub({number1,number2}));
            break;
          case "mul":
            dispatch(mul({number1,number2}));
            break;
          case "div":
            dispatch(div({number1,number2}));
            break;
        }
    }
    const handleChanges = (e)=>{
      const {name,value} = e.target;
      setNumbers({...numbers,[name]:Number(value)});
      console.log(numbers);
    }
  return (<>
    <h1>Arithmetic</h1>
    <form action="" onSubmit={(e)=>handeleSubmit(e,method)}>
    <label htmlFor="add">Addition</label>
                <input type="radio" name="cal" id="" value="add" onChange={(e)=>setMethod(e.target.value)}/><br/>
            <label htmlFor="sub">subraction</label>
                <input type="radio" name="cal" id="" value="sub" onChange={(e)=>setMethod(e.target.value)} /><br/>
            <label htmlFor="mul">Multiplication</label>
                <input type="radio" name="cal" id=""value="mul" onChange={(e)=>setMethod(e.target.value)} /><br/>
            <label htmlFor="div">Division</label>
                <input type="radio" name="cal" id=""value="div" onChange={(e)=>setMethod(e.target.value)} /><br/>

        Enter number 1<input value={numbers.number1} name="number1" onChange={(e)=>handleChanges(e)}/><br/>
        Enter number 2<input value={numbers.number2} name="number2" onChange={(e)=>handleChanges(e)}/><br/>
        <button type="submit">Submit</button>
    </form>
    <p>{data.number1}</p>
    <p>{data.number2}</p>
    <p>{data.result}</p>
  </>)
};