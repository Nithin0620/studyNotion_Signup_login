import { RouterProvider , createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Tamplet from "./Tamplet";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Dashboard from "../pages/Dashboard";
import PrivateRouter from "./PrivateRouter";
import App from "../App";

export const router =createBrowserRouter([
   {
      path:"/",
      element: <App/>,
      children:[
         {
            path:"",
            element:<Home/>
         },
         {
            path:"login",
            element:<Login/>
         },{
            path:"signup",
            element:<Signup/>
         },
         {
            path:"dashboard",
            element:<PrivateRouter/>,
            children:[
               {
                  path:"",
                  element: <Dashboard/>
               }
            ]
         }
      ]
   }
])

