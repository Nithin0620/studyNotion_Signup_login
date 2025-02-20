import React from 'react'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {toast} from 'react-hot-toast'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";


function Signupform () {
  const Navigate=useNavigate();
  const {setIsLoggedIn}= useContext(AppContext);
  const [accountType,setAccountType] = useState("Student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  function changeHandler(e){
    setFormData((prev)=>(
      {
        ...prev,
        [e.target.name]:e.target.value,
      }
    ))
  }

  function submitHandler(e){
    e.preventDefault();
    if(formData.password != formData.confirmPassword) {
      toast.error("Passwords do not match");
      return ;
    }

    setIsLoggedIn(true);
    toast.success("Account Created");
    const accountData = {
      ...formData
    };

    const finalData = {
      ...accountData,
      accountType
    }

    console.log("printing Final account data ");
    console.log(finalData);

    Navigate("/dashboard");

  }
  return (
    <div>
      <div>
        <button onClick={()=> setAccountType("student")}>Student</button>
        <button onClick={()=> setAccountType("Instructor")}>Instructor</button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <lable>
            <p>FirstName</p>
            <input type="text" value={formData.firstName} placeholder='Enter FirstName...' onChange={changeHandler} name="firstName"/>
          </lable>
          <lable>
            <p>LastName</p>
            <input type="text" value={formData.lastName} placeholder='Enter LastName...' onChange={changeHandler} name="lastName"/>
          </lable>
        </div>
        <lable>
          <p>Email</p>
          <input type="email" value={formData.email} placeholder='Enter your Email address...' onChange={changeHandler} name="email"/>
        </lable>

        <div>
        <lable>
          <p>Password</p>
          <input type= {showPassword ? ("text") : ("password")} value={formData.password} placeholder='Password' onChange={changeHandler} name="password"/>
          <span onClick={setShowPassword(!showPassword)}>{showPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
        </lable>
        <lable>
          <p>Confirm Password</p>
          <input type= {showConfirmPassword ? ("text") : ("password")} value={formData.confirmPassword} placeholder='Confirm Password' onChange={changeHandler} name="confirmPassword"/>
          <span onClick={setShowConfirmPassword(!showConfirmPassword)}>{showConfirmPassword ? (<AiOutlineEyeInvisible/>) : (<AiOutlineEye/>)}</span>
        </lable>/
        </div>
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px] mt-6'>
          Create Account
        </button>
      </form> 
    </div>
      
  )
}

export default Signupform
