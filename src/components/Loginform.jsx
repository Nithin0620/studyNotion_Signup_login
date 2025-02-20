import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import {useState} from 'react'

function Loginform () {
   const Navigate=useNavigate();
   const {setIsLoggedIn, isLoggedIn} =useContext(AppContext);
   const [showPassword,setShowPassword] =useState(false);
   const [formData,setFormData] ={
      email:"",
      password:"",
   }
   
   function submitHandler(e){
      e.preventDefault();
      setIsLoggedIn(true);
      toast.success("Logged IN Successfully");
      Navigate("/dashboard")
   }



   function changeHandler(e){
      setFormData((prev)=>(
         {
            ...prev,
            [e.target.name]:e.target.value,
         }
      ))
   }


  return (
   <div>
      <form onSubmit={submitHandler}>
      <div>
         <lable>
            <p>Email Address</p>
            <input type="email" value={formData.email} onChange={changeHandler} name='email' />
         </lable>
         <lable>
            <p>Password</p>
            <input type={showPassword? "text":"password"} value={formData.email} onChange={changeHandler} name='password' />
         </lable>
         <span 
            className='absolute right-3 top-[38px] cursor-pointer'
            onClick={() => setShowPassword((prev) => !prev)}>
               {showPassword ? 

               (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'/>) : 

               (<AiOutlineEye fontSize={24} fill='#AFB2BF'/>)}
         </span>
         <NavLink to="#">
            <p className='text-xs mt-1 text-blue-100 max-w-max ml-auto'>
               Forgot Password
            </p>
         </NavLink>
      </div>
      <button>Sign in</button>
      </form>
   </div>
  )
}

export default Loginform
