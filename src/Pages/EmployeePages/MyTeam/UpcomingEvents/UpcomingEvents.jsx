import { Table } from "flowbite-react";

const UpcomingEvents = () => {
    return (
        <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Profile</Table.HeadCell>
          <Table.HeadCell>Date of birth</Table.HeadCell>
          <Table.HeadCell>Remaining Days</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Google Pixel Phone
            </Table.Cell>
            <Table.Cell><img src="https://i.ibb.co/sjLKJpW/login.png" alt="" className="h-20 w-20"/></Table.Cell>
            <Table.Cell>Phone</Table.Cell>
            <Table.Cell>$799</Table.Cell>
            <Table.Cell>
              <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
    );
};

export default UpcomingEvents;