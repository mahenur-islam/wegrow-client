/* eslint-disable react/prop-types */
// AdminNavbar.js
import { Button } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const AdminNavbar = () => {
  const { logOut } = useAuth()
  const handleLogout = ()=>{
    logOut()
    .then(()=>{

    })
    .catch(error => console.log(error))
  }

 return (
    <div>
      <ul className="flex gap-3 fixed z-10 shadow-sm bg-white justify-center">
        <li><NavLink to='/assetlist'>Asset List</NavLink></li>
        <li><NavLink to='/adminhome' className='p-3 bg-gray-300'>Home</NavLink></li>
        <li><NavLink to='/addanasset'>Add Asset</NavLink></li>
        <li><NavLink to='/allrequests'>All Request</NavLink></li>
        <li><NavLink to='/customerrquestslist'>Customer Request</NavLink></li>
        <li><NavLink to='/myemployeelist'>My Employee</NavLink></li>
        <li><NavLink to='/profile'>Profile</NavLink></li>
        <li>name</li>
        <li>profile</li>
        <li> <Button onClick={handleLogout}>Logout</Button>
        </li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
