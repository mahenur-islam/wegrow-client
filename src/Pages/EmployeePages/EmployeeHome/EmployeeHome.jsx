import MyCustomRequest from "./MyCustomRequest";
import MyMonthlyRequest from "./MyMonthlyRequest";
import MyPendingRequest from "./MyPendingRequest";

const EmployeeHome = () => {
    return (
        <div>
           <MyCustomRequest></MyCustomRequest>
           <MyPendingRequest></MyPendingRequest>
           <MyMonthlyRequest></MyMonthlyRequest>
        </div>
    );
};

export default EmployeeHome;