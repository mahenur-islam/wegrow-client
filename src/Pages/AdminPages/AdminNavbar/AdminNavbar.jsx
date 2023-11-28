// AdminNavbar.js
import { NavLink } from 'react-router-dom';

const AdminNavbar = () => {
  return (
    <div>
      <ul className="flex gap-3">
        <li><NavLink to='/dashboard/assetlist'>Asset List</NavLink></li>
        <li><NavLink to='/dashboard/adminhome' className='p-3 bg-gray-300'>Home</NavLink></li>
        <li><NavLink to='/dashboard/addanasset'>Add Asset</NavLink></li>
        <li><NavLink to='/dashboard/allrequests'>All Request</NavLink></li>
        <li><NavLink to='/dashboard/customerrquestslist'>Customer Request</NavLink></li>
        <li><NavLink to='/dashboard/myemployeelist'>My Employee</NavLink></li>
        <li><NavLink to='/dashboard/profile'>Profile</NavLink></li>
        <li>name</li>
        <li>profile</li>
        <li>logout</li>
      </ul>
    </div>
  );
};

export default AdminNavbar;
