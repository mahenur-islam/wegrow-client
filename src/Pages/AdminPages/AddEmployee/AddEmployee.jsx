import { useLoaderData } from "react-router-dom";
import Heading from "../../../Component/Heading/Heading";
import Package from "../../../Component/Packages/Package";
import EmployeeTable from "./EmployeeTable";

const AddEmployee = () => {
  const { users } = useLoaderData();
  return (
    <div>
      <div>
        <Package></Package>
      </div>
      <div className="py-10">
        <div className="h-1 w-1/4 mx-auto bg-red-200 mb-3"></div>
        <Heading title={"Employee List"} center />
        <div className="h-1 w-1/4 mx-auto bg-red-200 mb-3"></div>
      </div>
      <div className="mb-40">
        <EmployeeTable users={users} ></EmployeeTable>
      </div>
    </div>
  );
};

export default AddEmployee;
