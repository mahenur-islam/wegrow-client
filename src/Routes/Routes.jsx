import {
    createBrowserRouter
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import EmployeeForm from "../Pages/EmployeeForm/EmployeeForm";
import AdminForm from "../Pages/AdminForm/AdminForm";
import Profile from "../Pages/Profile/Profile";
import CustomReq from "../Pages/EmployeePages/CustomReq/CustomReq";
import UpcomingEvents from "../Pages/EmployeePages/MyTeam/UpcomingEvents/UpcomingEvents";
import TeamMember from "../Pages/EmployeePages/MyTeam/TeamMember/TeamMember";
import AddAsset from "../Pages/AdminPages/AddAsset/AddAsset";
import AssetList from '../Pages/AdminPages/AssetList/AssetList'
import AllRequest from "../Pages/AdminPages/AllRequest/AllRequest";
import CustomRequestList from "../Pages/AdminPages/CustomRequestList/CustomRequestList";
import Signup from "../Pages/Signup/Signup";
import PrivateRoute from "./PrivateRoute";
import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";
import EmployeeList from "../Pages/AdminPages/EmployeeList/EmployeeList";
import MyTeam from "../Pages/EmployeePages/MyTeam/MyTeam";
import AddEmployee from "../Pages/AdminPages/AddEmployee/AddEmployee";
import MyAssets from "../Pages/EmployeePages/MyAssets/MyAssets";
import RequestAsset from "../Pages/EmployeePages/RequestAsset/RequestAsset";
import EmployeeHome from "../Pages/EmployeePages/EmployeeHome/EmployeeHome";
import EditProduct from "../Pages/AdminPages/EditProduct/EditProduct";

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
            path:'/signup',
            element: <Signup></Signup>
        },
        {
            path:'/employeesignup',
            element: <EmployeeForm></EmployeeForm>
        },
        {
            path:'/adminsignup',
            element: <AdminForm></AdminForm>
        }, 
        {
            path:'/admin-home',
            element: <AdminHome></AdminHome>
        }, 
        {
            path:'/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:'/custom-request',
            element: <PrivateRoute><CustomReq></CustomReq></PrivateRoute>
        },
        {
            path:'/upcoming-events',
            element: <PrivateRoute><UpcomingEvents></UpcomingEvents></PrivateRoute>
        },
        {
            path:'/team-member',
            element: <PrivateRoute><TeamMember></TeamMember></PrivateRoute>
        },
        {
            path:'/add-an-asset',
            element: <PrivateRoute><AddAsset></AddAsset></PrivateRoute>
        },
        {
            path:'/all-requests',
            element: <PrivateRoute><AllRequest></AllRequest></PrivateRoute>
        },
        {
            path:'/custom-requests-list',
            element: <PrivateRoute><CustomRequestList></CustomRequestList></PrivateRoute>
        },
        {
            path:'/asset-list',
            element: <PrivateRoute><AssetList></AssetList></PrivateRoute>
        },
        {
            path:'/edit-product/:id',
            element: <PrivateRoute><EditProduct></EditProduct></PrivateRoute>,
            loader: ({params})=> fetch(`https://wegrow-server.vercel.app/products/${params.id}`)
        },
        {
            path:'/my-employee-list',
            element:<PrivateRoute> <EmployeeList></EmployeeList></PrivateRoute>
        },
        {
            path:'/custom-request',
            element: <PrivateRoute><CustomReq></CustomReq></PrivateRoute>
        },
        {
            path:'/add-an-employee',
            element: <PrivateRoute><AddEmployee></AddEmployee></PrivateRoute>,
            loader:()=> fetch('https://wegrow-server.vercel.app/users')
        },
        {
            path:'/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        
        //employee routes 
        {
            path:'/employee-home',
            element: <PrivateRoute><EmployeeHome></EmployeeHome></PrivateRoute>
        },
        {
            path:'/my-team',
            element: <PrivateRoute><MyTeam></MyTeam></PrivateRoute>
        },
        {
            path:'/my-assets',
            element: <PrivateRoute><MyAssets></MyAssets></PrivateRoute>
        },
        {
            path:'/request-for-an-asset',
            element:<PrivateRoute><RequestAsset></RequestAsset></PrivateRoute>
        },
        {
            path:'/make-a-custom-request',
            element:<PrivateRoute><CustomReq></CustomReq></PrivateRoute>
        },
        {
            path:'/employee-profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
      ]
    },
  ]);