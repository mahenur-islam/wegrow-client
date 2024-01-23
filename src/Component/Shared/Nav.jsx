import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import AdminNavbar from "../../Pages/AdminPages/AdminNavbar/AdminNavbar";
import NavBar from "../NavBar.jsx/NavBar";
import EmployeeNavbar from "../../Pages/EmployeePages/EmployeeNavbar/EmployeeNavabr";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (user) {
          const userIsAdmin = true;
          setIsAdmin(userIsAdmin);
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
          {isAdmin ? (
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
