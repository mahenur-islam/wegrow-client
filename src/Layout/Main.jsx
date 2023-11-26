import { Outlet } from "react-router-dom";
import Foot from "../Component/Shared/Foot";
import Nav from "../Component/Shared/Nav";

const Main = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Nav></Nav>
            <div className="mb-10">
            <Outlet></Outlet>
            </div>
           
            <Foot />
        </div>
    );
};

export default Main;