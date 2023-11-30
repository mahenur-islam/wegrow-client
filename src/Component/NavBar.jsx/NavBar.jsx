import { Button, Navbar } from 'flowbite-react';
import { FaPeopleRoof } from 'react-icons/fa6';
import { IoMdPeople } from 'react-icons/io';
import { IoHomeOutline } from 'react-icons/io5';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
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
          <NavLink to="/" active= 'true' className="flex justify-center items-center gap-1">
          <IoHomeOutline className="text-lg" /> Home
          </NavLink>
          <NavLink to="/employeesignup" className="flex justify-center items-center gap-1"><IoMdPeople className="text-xl" />Join as Employee</NavLink>
          <NavLink to="/adminsignup" className="flex justify-center items-center gap-1"><FaPeopleRoof className="text-xl"  />Join as HR/Admin</NavLink>
          <NavLink to="/login" className="flex justify-center items-center gap-1"><Button>Login</Button></NavLink>
          {/* {
            user ? <>
              <div className="flex justify-center items-center gap-3">
                <p>{user?.displayName}</p>
                <Button outline onClick={handleLogout}>Logout</Button>
              </div>
              
            </> : <Navbar.Link href="/login"><Button>Login</Button></Navbar.Link>
          } */}
          
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default NavBar;