/* eslint-disable react/prop-types */
import {  Table } from 'flowbite-react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Heading from '../../../Component/Heading/Heading';
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';

const Products = ({ filters, sortOption, searchQuery}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://wegrow-server.vercel.app/products')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  const filteredProducts = products.filter(product => {
    const typeMatch = filters.assetType === "all" || product.type.toLowerCase() === filters.assetType.toLowerCase();
    const statusMatch = filters.stockStatus === "all" || product.availability.toLowerCase() === (filters.stockStatus);
    const searchMatch = !searchQuery || product.assetName.toLowerCase().includes(searchQuery.toLowerCase());
    return typeMatch && statusMatch && searchMatch;
  });


  //sort functionality 
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "ascending") {
      return a.quantity - b.quantity;
    } else if (sortOption === "descending") {
      return b.quantity - a.quantity;
    } else {
      return 0; // Default order
    }
  });


   // Handle delete
   const handleDelete = async (_id) => {
    try {
      const response = await fetch(`https://wegrow-server.vercel.app/products/${_id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        // Remove the deleted product from the state
        setProducts(prevProducts => prevProducts.filter(product => product._id !== _id));
        toast.success('Product deleted successfully');
      } else {
        toast.error('Failed to delete product');
      }
    } catch (error) {
      toast.error('Error deleting product:', error);
    }
  };

  return ( 
    <div className="overflow-x-auto">
      <Table>
        <Table.Head className='text-md text-red-800'>
          <Table.HeadCell>Products</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Added Date</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          {/* <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell> */}
        </Table.Head>
        <Table.Body className="divide-y">
          {sortedProducts && sortedProducts.length>0 ?  (sortedProducts.map((product, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-sky-100">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product?.assetName}
              </Table.Cell>
              <Table.Cell>{product?.type}</Table.Cell>
              <Table.Cell>{product?.quantity}</Table.Cell>
              <Table.Cell>{product?.addedAt}</Table.Cell>
              <Table.Cell>${product?.price}</Table.Cell>
              <Table.Cell className='flex gap-4'>
                <RiDeleteBin6Line className='text-xl cursor-pointer hover:scale-110 hover:text-red-700' onClick={()=>{handleDelete(product._id)}} />
                <NavLink to={`/edit-product/${product._id}`}><FaRegEdit className='text-xl cursor-pointer hover:scale-110 hover:text-blue-700'/></NavLink>
              </Table.Cell>
            </Table.Row>
          ))): <div className='min-h-[calc(100vh-450px)] flex items-center justify-center'><Heading center={false} title={"No products found"} subTitle={"please add some product first"}/></div>}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Products;
