import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AdminNavbar from "../../Pages/AdminPages/AdminNavbar/AdminNavbar";
import EmployeeNavbar from "../../Pages/EmployeePages/EmployeeNavbar/EmployeeNavbar";
import NavBar from "../NavBar.jsx/NavBar";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const [userRole, setUserRole] = useState('employee');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user && user.role) {
          setUserRole(user.role);
        }
      } catch (error) {
        console.error("Error fetching user role:", error);
      }
    };

    fetchUserData();
  }, [user]);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Additional logout logic if needed
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {user ? (
        <div>
          {userRole === "admin" ? (
            <AdminNavbar handleLogout={handleLogout} />
          ) : (
            <EmployeeNavbar handleLogout={handleLogout} />
          )}
        </div>
      ) : (
        <div>
          <NavBar />
        </div>
      )}
    </div>
  );
};

export default Nav;
