import { NavLink } from 'react-router-dom';

const EmployeeNavabr = () => {
    return (
        <div>
        <ul className="flex">
            <li><NavLink to='employee/adminhome'>Home</NavLink></li>
            <li><NavLink to='employee/assetlist'>Asset List</NavLink></li>
            <li><NavLink to='employee/addanasset'>Add Asset</NavLink></li>
            <li><NavLink to='employee/allrequests'>All Request</NavLink></li>
            <li><NavLink to='employee/customerrquestslist'>Customer Request</NavLink></li>
            <li><NavLink to='employee/myemployeelist'>My Employee</NavLink></li>
            <li><NavLink to='employee/profile'>Profile</NavLink></li>
            <li>name</li>
            <li>profile</li>
            <li>logout</li>
        </ul>
    </div>
    );
};

export default EmployeeNavabr;