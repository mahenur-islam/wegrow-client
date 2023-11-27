import { Table } from 'flowbite-react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
const Products = () => {
    return (
        <div className="overflow-x-auto">
        <Table>
          <Table.Head className='text-md text-red-800'>
            <Table.HeadCell>Product Name</Table.HeadCell>
            <Table.HeadCell>Type</Table.HeadCell>
            <Table.HeadCell>Quantity</Table.HeadCell>
            <Table.HeadCell>Added Date</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-red-200">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {'Apple MacBook Pro 17"'}
              </Table.Cell>
              <Table.Cell>Sliver</Table.Cell>
              <Table.Cell>Laptop</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell>$2999</Table.Cell>
              <Table.Cell className='flex gap-4'>
              <RiDeleteBin6Line className='text-xl' />
              <FaRegEdit className='text-xl'  />
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    );
};

export default Products;