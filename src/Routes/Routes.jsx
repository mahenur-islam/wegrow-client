import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EmployeeForm from "../Pages/EmployeeForm/EmployeeForm";
import AdminForm from "../Pages/AdminForm/AdminForm";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/employeesignup',
            element: <EmployeeForm></EmployeeForm>
        },
        {
            path:'/adminsignup',
            element: <AdminForm></AdminForm>
        }
      ]
    },
  ]);