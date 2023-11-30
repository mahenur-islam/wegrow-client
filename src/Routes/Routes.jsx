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
            path:'/adminhome',
            element: <AdminHome></AdminHome>
        }, 
        {
            path:'/profile',
            element: <PrivateRoute><Profile></Profile></PrivateRoute>
        },
        {
            path:'/customrequest',
            element: <CustomReq></CustomReq>
        },
        {
            path:'/upcomingevents',
            element: <UpcomingEvents></UpcomingEvents>
        },
        {
            path:'/teammember',
            element: <TeamMember></TeamMember>
        },
        {
            path:'/addanasset',
            element: <AddAsset></AddAsset>
        },
        {
            path:'/allrequests',
            element: <AllRequest></AllRequest>
        },
        {
            path:'/customerrquestslist',
            element: <CustomRequestList></CustomRequestList>
        },
        {
            path:'/assetlist',
            element: <AssetList></AssetList>
        },
        {
            path:'/myemployeelist',
            element: <EmployeeList></EmployeeList>
        },

      ]
    },
  ]);