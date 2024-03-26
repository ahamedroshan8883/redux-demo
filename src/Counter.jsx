import React, { useState } from "react"
import {useSelector,useDispatch} from 'react-redux';
import { decrement,increment, incrementByAmount,reset } from "./CounterSlice";

export default function Counter(){
    const count = useSelector((state)=>state.counter.value);
    const dispatch = useDispatch();
    let [input,setInput] = useState(0);
  return (<>
    <h1>counter</h1>
    <div>
        <button aria-label="Increment-value" onClick={()=>dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button  aria-label="Decrement-value"onClick={()=>dispatch(decrement())}>Decrement</button><br></br>
        Enter a Nmber<input onChange={(e)=>setInput(e.target.value)}/><br/>
      
        <button onClick={()=>dispatch(incrementByAmount(Number(input)))}>Increment By Ammout</button>&nbsp;
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  </>)
};