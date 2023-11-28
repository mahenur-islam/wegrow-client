import { Outlet } from "react-router-dom";
import Foot from "../Component/Shared/Foot";
// import Nav from "../Component/Shared/Nav";
// import AdminHome from "../Pages/AdminPages/AdminHome/AdminHome";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-10">
            <Outlet></Outlet>
            </div>
            <Foot />
        </div>
    );
};

export default Main;