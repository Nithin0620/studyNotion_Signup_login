import React, { createContext, useState } from 'react';
import signupImg from '../assets/signup.png';
import loginImg from '../assets/login.png';

export const AppContext = createContext();

export default function AppContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Define Login and Signin objects
  const Login = {
    title: "Welcome Back",
    desc1: "Build skills for today, tomorrow, and beyond.",
    desc2: "Education to future-proof your career.",
    image: { loginImg },
    formtype: "login"
  };
  
  const Signin = {
    title: "Join the millions learning to code with StudyNotion for free",
    desc1: "Build skills for today, tomorrow, and beyond.",
    desc2: "Education to future-proof your career.",
    image: { signupImg },
    formtype: "signup"
  };

  // Wrap value in a function to avoid issues
  const value = {
    isLoggedIn,
    setIsLoggedIn,
    Login,
    Signin
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
