import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

  const {email,password} = useSelector((state)=>state.AuthSlice);

  return email==="a@a.com" . password==="1234" ? (<Outlet/>) : (<Navigate to="/Login"/>)


}

export default PrivateRouter