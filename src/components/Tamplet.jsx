import React from 'react'
import Signupform from './Signupform'
import bg from '../assets/frame.png'
import Loginform from './Loginform'
import { useContext } from 'react'
import {FcGoogle} from "react-icons/fc"
import { AppContext } from '../context/AppContext'

function Tamplet({login}) {
  const {Login, Signin} = useContext(AppContext);
  // Use the login prop directly to determine which data to use
  const data = login ? Login : Signin;

  return (
    <div>
      <div>
        <h1>{data.title}</h1>
        <p className='text-[1.125rem] leading[1.625rem] mt-4'>
          <span className='text-richblack-100'>{data.desc1}</span>
          <br/>
          <span className='text-blue-100 italic'>{data.desc2}</span>
        </p>

        {login ? <Loginform/> : <Signupform/>}

        <div className='flex w-full items-center my-4 gap-x-2'>
          <div className='w-full h-[1px] bg-richblack-700'></div>
          <p className='text-richblack-700 font-medium leading[1.375rem]'>
            OR
          </p>
          <div className='w-full h-[1px] bg-richblack-700'></div>
        </div>
        <button><FcGoogle/>Sign Up with Google</button>
      </div>
      <div>
        <img src={bg} alt="" />
        <img src={data.image} alt="" />
      </div>
    </div>
  )
}

export default Tamplet
