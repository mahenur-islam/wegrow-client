import { Button, Navbar } from "flowbite-react";
import { FaPeopleRoof } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { IoHomeOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar fluid rounded className="p-5 shadow-sm rounded-none">
        <Navbar.Brand as={Link} href="">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            WeGrow
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <NavLink
            to="/"
            active="true"
            className="flex justify-center items-center gap-1"
          >
            <IoHomeOutline className="text-lg" /> Home
          </NavLink>
          <NavLink
            to="/employeesignup"
            className="flex justify-center items-center gap-1"
          >
            <IoMdPeople className="text-xl" />
            Join as Employee
          </NavLink>
          <NavLink
            to="/adminsignup"
            className="flex justify-center items-center gap-1"
          >
            <FaPeopleRoof className="text-xl" />
            Join as HR/Admin
          </NavLink>
          <NavLink
            to="/login"
            className="flex justify-center items-center gap-1"
          >
            <Button>Login</Button>
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
