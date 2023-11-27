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
import AssetList from "../Pages/AdminPages/AssetList/AssetList";

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
        }, 
        {
            path:'/profile',
            element: <Profile></Profile>
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
            path:'/assetlist',
            element: <AssetList></AssetList>
        }
      ]
    },
  ]);