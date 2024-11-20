import React from 'react'
import News from "../pages/News"
import Login from "../pages/Login"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
<Route path='/' element={<News/>}/>
<Route path='/Login' element={<Login/>}/>

    </Routes>
    
    </BrowserRouter>


  )
}

export default AppRouter