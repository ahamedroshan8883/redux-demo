import './App.css';
import Arithmetic from './Arithmetic';
import Counter from './Counter';
import TodoRedux from './TodoRedux';
import Usereducedemo from './usereducedemo';
import { BrowserRouter,Link,Route,Routes } from 'react-router-dom';
import Home from '../src/projectByredux/Home';
import Login from './projectByredux/Login';
import Logout from './projectByredux/Logout';
import Products from './projectByredux/Products';
import { useState } from 'react';

function App() {
  let [user,setUser] = useState(null);
  const handleLogin = (user)=>{
    setUser(user);
    console.log(user);
  }
  const handleLogout = ()=>{
    setUser(null);
  } 
  return (
    <div className="App">
      <BrowserRouter>
      <nav>
        <Link to='/'>Home</Link>&nbsp;
        {user?(<>
          <Link to='/products'>Products</Link>&nbsp;
        <Link to='/logout'>Logout</Link>
        </>):<Link to='/login'>Login</Link>}
        
      </nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login handleLogin={handleLogin}></Login>}></Route>
        <Route path='/logout' element={<Logout handleLogout={handleLogout}></Logout>}></Route>
        <Route path='/products' element={<Products></Products>}></Route>
      </Routes>
      </BrowserRouter>
        {/* <Counter/> */}
        {/* <Arithmetic/> */}
        <TodoRedux/>
        {/* <Usereducedemo/> */}
    </div>
  );
}

export default App;
