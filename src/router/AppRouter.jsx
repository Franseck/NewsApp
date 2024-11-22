import React from 'react'
import News from "../pages/News"
import Login from "../pages/Login"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRouter from "./PrivateRouter"




const AppRouter = () => {
  return (
    <BrowserRouter 
    future={{
      v7_relativeSplatPath: true,
      v7_startTransition: true,
    }}
    >
     <Navbar/>
     
      <Routes>
         <Route path="/login" element={<Login />} />
       <Route path="/" element={<PrivateRouter/>}>
          <Route path="" element={<News />} />
        </Route>



       
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default AppRouter