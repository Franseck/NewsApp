import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';

const PrivateRouter = () => {

  const {email,password} = useSelector((state)=>state.AuthSlice);

  return email==="seckin" && password==="1234" ? (<Outlet/>) : (<Navigate to="/login"/>)


}

export default PrivateRouter