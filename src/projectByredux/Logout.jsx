import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function Logout({handleLogout}){
    let navigate = useNavigate();
    useEffect(()=>{
        handleLogout();
        navigate('/')
    },[])
  return (<>
    <h1>Logout</h1>
  </>)
};