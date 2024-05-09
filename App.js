import React from 'react';
import Main from './Components/Main';
import './Components/style.css';
import Login from './Components/Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<SignUp />}></Route>
      <Route path='/main' element={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
    
     
    </>
  );
}

export default App;
