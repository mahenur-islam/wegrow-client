import { Link } from "react-router-dom";
import { Avatar, Button, Navbar } from "flowbite-react";
import { IoHomeOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
const Nav = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogout = ()=>{
    logOut()
    .then(()=>{

    })
    .catch(error => console.log(error))
  }

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
          {
            user ? <>
              <div className="flex justify-center items-center gap-3">
                <p>{user?.displayName}</p>
                <Avatar img={user.photoUrl} />
                <Button outline onClick={handleLogout}>Logout</Button>
              </div>
              
            </> : <Navbar.Link href="/login"><Button>Login</Button></Navbar.Link>
          }
          
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nav;
