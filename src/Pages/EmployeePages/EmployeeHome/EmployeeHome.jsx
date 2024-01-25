import MyCustomRequest from "./MyCustomRequest";
import MyMonthlyRequest from "./MyMonthlyRequest";
import MyPendingRequest from "./MyPendingRequest";

const EmployeeHome = () => {
    return (
        <div className="my-10 space-y-10">
           <MyCustomRequest></MyCustomRequest>
           <MyPendingRequest></MyPendingRequest>
           <MyMonthlyRequest></MyMonthlyRequest>
        </div>
    );
};

export default EmployeeHome;