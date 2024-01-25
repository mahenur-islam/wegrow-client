/* eslint-disable react/prop-types */
import { Avatar, Button, Navbar } from "flowbite-react";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
import { NavLink } from "react-router-dom";
const AdminNavbar = ({ handleLogout }) => {
  useEffect(() => {
    axiosSecure.get("https://wegrow-server.vercel.app/users").then((data) => {
      console.log(data.data.users[0].companyName);
    });
  }, []);
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Navbar fluid className="bg-gray-100 mb-20 p-4">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        weGrow 
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse className="mt-2">
      <ul className="flex flex-col justify-center items-center gap-6 md:flex-row">
      <Navbar.Link href="/admin-home" active>
         Admin Home
        </Navbar.Link>
        <li><NavLink to="/asset-list">Asset List</NavLink></li>
          <li><NavLink to="/add-an-asset">Add an Asset</NavLink></li>
          <li><NavLink to="/all-requests">All Requests</NavLink></li>
          <li><NavLink to="/custom-requests-list">Custom Request List</NavLink></li>
          <li><NavLink to="/my-employee-list">My Employee List</NavLink></li>
          <li><NavLink to="/add-an-employee">Add an Employee</NavLink></li>
          <li><NavLink to="/profile">My Profile</NavLink></li>
          {user ? (
          <>
            <li className="flex justify-center items-center gap-3">
            <Avatar img={user?.photoURL} rounded/>
              <p>{user?.displayName}</p>
              <Button outline onClick={handleLogout}>
                Logout
              </Button>
            </li>
          </>
        ) : (
          <Navbar.Link href="/login">
            <Button>Login</Button>
          </Navbar.Link>
        )}
      </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AdminNavbar;