import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login.';
import Register from '../pages/Register';
import Navbar1 from '../components/Navbar';
function  AppRouter(){
    return(<>
       
    <BrowserRouter>
    <Navbar1 />
        <Routes>
     
        <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
    </>)
}
export default AppRouter;