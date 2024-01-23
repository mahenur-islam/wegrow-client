/* eslint-disable react/prop-types */
import { Button, Navbar } from "flowbite-react";
import { useContext, useEffect } from "react";
// import { useEffect } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import { axiosSecure } from "../../../Hooks/useAxiosSecure";
const EmployeeNavbar = ({handleLogout}) => {
  useEffect(()=>{
    axiosSecure.get("http://localhost:5000/users")
    .then(data => {
      console.log(data.data.users[0].companyName);
    })
  },[])
  const {user} = useContext(AuthContext);
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand href="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
           weGrow
          </span>
        </Navbar.Brand>
        <Navbar.Collapse>
        <Navbar.Link href="/employee-home" active>
          Employee Home
        </Navbar.Link>
        <Navbar.Link href="/my-assets">My Assets</Navbar.Link>
        <Navbar.Link href="/my-team">My Team</Navbar.Link>
        <Navbar.Link href="/request-for-an-asset">Request For An Asset</Navbar.Link>
        <Navbar.Link href="/make-a-custom-request">Make A Custom Request</Navbar.Link>
      </Navbar.Collapse>
           {
            user ? <>
              <div className="flex justify-center items-center gap-3">
                <p>{user?.displayName}</p>
                <Button outline onClick={handleLogout}>Logout</Button>
              </div>
              
            </> : <Navbar.Link href="/login"><Button>Login</Button></Navbar.Link>
          }
      
      </Navbar>
    </div>
  );
};

export default EmployeeNavbar;
