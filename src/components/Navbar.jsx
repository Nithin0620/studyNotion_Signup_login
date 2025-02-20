import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
   const {setIsLoggedIn, isLoggedIn} =useContext(AppContext);
  return (
   <div className='flex m-4 justify-around'> 
      <div>
         <NavLink to="/"><img src={logo} alt="" /></NavLink>
      </div>
      <div className='flex gap-5  justify-around'>
         <NavLink to="/">Home</NavLink>
         <NavLink to="/">About</NavLink>
         <NavLink to="/">Contact</NavLink>
      </div>
      <div className='flex gap-5 justify-around'>
         <div>{
            !isLoggedIn && <NavLink to="/login"><button>Login</button></NavLink>
            }
         </div>
            
         <div>{
            !isLoggedIn && <NavLink to="/signup"><button>SignUp</button></NavLink>
            }
         </div>
         <div>{
            isLoggedIn && <NavLink to="/"><button onClick={()=>(setIsLoggedIn(false))}>Log Out</button></NavLink>
            }
         </div>
            
         <div>{
            isLoggedIn && <NavLink to="/dashboard" ><button >Dashboard</button></NavLink>
            }
         </div>
      </div>
   </div>
  )
}

export default Navbar
