import { Table } from "flowbite-react";

const CustomRequestList = () => {
  return (
    <div className="min-h-[40vh] py-10">
      <h1 className="text-xl text-center py-5">Custom Request</h1>
      <Table>
        <Table.Head>
          <Table.HeadCell>Asset name</Table.HeadCell>
          <Table.HeadCell>Asset Type</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Request Date</Table.HeadCell>
          <Table.HeadCell>Additional Info</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {'Apple MacBook Pro 17"'}
            </Table.Cell>
            <Table.Cell>Sliver</Table.Cell>
            <Table.Cell>Laptop</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell>$2999</Table.Cell>
            <Table.Cell className="grid grid-cols-2 gap-3 font-semibold">
              <p className="text-green-500">Approve</p>
              <p className="text-red-500">Delete</p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomRequestList;
