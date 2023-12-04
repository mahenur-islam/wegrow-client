import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AdminNavbar from "../../Pages/AdminPages/AdminNavbar/AdminNavbar";
// import { Button } from "flowbite-react";
// import { NavLink } from "react-router-dom";
import EmployeeNavbar from "../../Pages/EmployeePages/EmployeeNavbar/EmployeeNavabr";
import NavBar from "../NavBar.jsx/NavBar";
const Nav = () => {

  const {user, logOut} = useContext(AuthContext);



  const isAdmin = true;
  


  const handleLogout = ()=>{
    logOut()
    .then(()=>{

    })
    .catch(error => console.log(error))
  }

  return (
    <div>
      {
        user ? <div>{
          isAdmin ? <><AdminNavbar handleLogout={handleLogout} /></> : <><EmployeeNavbar /></>
        }</div> : <div><NavBar /></div>
      }
    </div>
         

);
};

export default Nav;
