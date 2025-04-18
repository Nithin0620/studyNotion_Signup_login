import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const Navigate=useNavigate();
  const {isLoggedIn} =useContext(AppContext);
  if(isLoggedIn) {
    return (<Outlet/>)
  } 
  else{
    return <Navigate to="/login"/>;
  }
    
}

export default PrivateRouter
