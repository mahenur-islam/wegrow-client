import { Link } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { IoHomeOutline } from "react-icons/io5";
const Nav = () => {
  return (
    <div>
      <Navbar fluid rounded className="p-5 shadow-sm rounded-none">
        <Navbar.Brand as={Link} href="https://flowbite-react.com">
          <img
            src="https://i.ibb.co/ZKPV5D9/Nothing.png"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite React
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active className="flex justify-center items-center gap-1">
          <IoHomeOutline className="text-lg" /> Home
          </Navbar.Link>
          <Navbar.Link href="/employeesignup">Join as Employee</Navbar.Link>
          <Navbar.Link href="/adminsignup">Join as HR/Admin</Navbar.Link>
          <Navbar.Link href="/login">Login</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
