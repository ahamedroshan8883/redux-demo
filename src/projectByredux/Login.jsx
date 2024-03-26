import React ,{useState} from "react"
import { useNavigate } from "react-router-dom";

export default function Login({handleLogin}){
    const navigate = useNavigate();
    let [user,setUser] = useState({'username':'','password':''});
    const handelChanges = (e)=>{
        const {name,value} = e.target;
        setUser({...user,[name]:value});
        console.log(user);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleLogin(user);
        navigate('/products');
    }
  return (<>
    <h1>Login</h1>
    <form action="" onSubmit={(e)=>handleSubmit(e)}>
        Enter userName&nbsp;<input type="text" name="username" id="" onChange={(e)=>handelChanges(e) }value={user.username}/><br />
        Enter Password&nbsp;<input type="password" name="password" onChange={(e)=>handelChanges(e)} value={user.password}/><br />
        <button type="submit">Submit</button>
    </form>
  </>)
};