/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Avatar, Button, Checkbox, Table } from "flowbite-react";
import Heading from "../../../Component/Heading/Heading";

const EmployeeTable = ({users}) => {
    const {name, role, email, profilePic} = users;
    console.log(users);
    return (
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell className="p-4">
            <Checkbox />
          </Table.HeadCell>
          <Table.HeadCell>Profile</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Member Type</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users && users.length>0 ?  (users.map((user, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-sky-100">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              <Avatar img={user?.profilePic} alt="avatar of Jese" rounded />
              </Table.Cell>
              <Table.Cell>{user?.email}</Table.Cell>
              <Table.Cell>{user?.name}</Table.Cell>
              <Table.Cell>{user?.role}</Table.Cell>
              <Table.Cell className='flex gap-4'>
              <Button outline>Add to the team</Button>
              </Table.Cell>
            </Table.Row>
          ))): <div className='min-h-[calc(100vh-450px)] flex items-center justify-center'><Heading center={false} title={"No products found"} subTitle={"please add some product first"}/></div>}
        </Table.Body>
      </Table>
    </div>
    );
};

export default EmployeeTable;