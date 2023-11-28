import AdminNavbar from "../../Pages/AdminPages/AdminNavbar/AdminNavbar";
import Nav from "../Shared/Nav";

const Dashboard = () => {

    const isAdmin = true; 
    return (
        <div>
            {
                isAdmin ? <AdminNavbar></AdminNavbar> : <Nav></Nav>
            }
        </div>
    );
};

export default Dashboard;