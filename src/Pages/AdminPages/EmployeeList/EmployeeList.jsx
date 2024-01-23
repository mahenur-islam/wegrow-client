// /* eslint-disable react/prop-types */

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Heading from "../../../Component/Heading/Heading";
import Swal from "sweetalert2";
import { Button, Card } from "flowbite-react";

const EmployeeList = () => {
  // usding tanstacck query
  const axiosSecure = useAxiosSecure();
  const { data: {users = [], teamMemberCount } = {}, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      
      return res.data;
    },
  });

  const handleDeleteUser = (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${userId}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <Heading title={"My Team Members"} center="true" subTitle={`Number of team members: ${teamMemberCount}`} />
      {/* <p className="text-center font-bold py-10 text-2xl text-gray-500">Number of Team Member  {teamMemberCount}</p> */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-3 mt-10">
        {users.map((member) => (
          <div key={member._id}>
            <Card className="max-w-sm h-[40vh]">
              <div className="flex flex-col items-center pb-10">
                <img
                  alt="Bonnie image"
                  height="96"
                  src={member.companyPhotoUrl}
                  width="96"
                  className="mb-3 rounded-full shadow-lg"
                />
                <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                  {member.name}
                </h5>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {member.role}
                </span>
                <div className="mt-4 flex space-x-3 lg:mt-6">
                  <Button outline onClick={() => handleDeleteUser(member._id)}>
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
