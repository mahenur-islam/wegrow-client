/* eslint-disable react/prop-types */
// AdminNavbar.js
// import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
// import useAuth from '../../../Hooks/useAuth';

const EmployeeNavbar = () => {
 return (
    <div>
      <ul className="flex gap-3 z-10 shadow-sm bg-white justify-center mb-10 mt-10">
        <li><NavLink to='/myassets' className='p-3 hover:bg-gray-300'>My Asset</NavLink></li>
        <li><NavLink to='/myteam'>My Team</NavLink></li>
        <li><NavLink to='/requestasset'>Request An Asset</NavLink></li>
        <li><NavLink to='/customrequest'>Custom Request</NavLink></li>
        <li><NavLink to='/myprofile'>Profile</NavLink></li>
        <li>name</li>
        <li>profile</li>
        {/* <li> <Button onClick={handleLogout}>Logout</Button>
        </li> */}
      </ul>
    </div>
  );
};

export default EmployeeNavbar;
