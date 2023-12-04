/* eslint-disable react/prop-types */
import { Button, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

const AdminNavbar = ({handleLogout}) => {
  return (
    <div>
      <Navbar fluid rounded>
        <Navbar.Brand as={NavLink} to="/">
          <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Button onClick={handleLogout}>Logout</Button>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>
          <NavLink to="/add-an-asset" className="navbar-link">
            Add an Asset
          </NavLink>
          <NavLink to="/asset-list" className="navbar-link">
            Asset List
          </NavLink>
          <NavLink to="/all-requests" className="navbar-link">
            All Requests
          </NavLink>
          <NavLink to="/custom-requests-list" className="navbar-link">
            Custom Requests List
          </NavLink>
          <NavLink to="/my-employee-list" className="navbar-link">
            My Employee List
          </NavLink>
          <NavLink to="/add-employee" className="navbar-link">
            Add an Employee
          </NavLink>
          <NavLink to="/profile" className="navbar-link">
            Profile
          </NavLink>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default AdminNavbar;
