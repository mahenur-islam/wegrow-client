import { Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Heading from "../../../Component/Heading/Heading";

const CustomRequestList = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/custom-request')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="min-h-[40vh] py-10">
      <h1 className="text-2xl font-semibold mb-10 text-center py-5">Custom Request</h1>
      <Table striped >
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
          {products && products.length>0 ?  (products.map((product, index) => (
            <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-sky-100">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {product?.assetName}
              </Table.Cell>
              <Table.Cell>{product?.assetType}</Table.Cell>
              <Table.Cell>{product?.userEmail}</Table.Cell>
              <Table.Cell>{product?.userDisplayName}</Table.Cell>
              <Table.Cell>{product?.addedAt}</Table.Cell>
              <Table.Cell>{product?.additionalInfo}</Table.Cell>
            </Table.Row>
          ))): <div className='min-h-[calc(100vh-450px)] flex items-center justify-center'><Heading center={false} title={"No products found"} subTitle={"please add some product first"}/></div>}
        </Table.Body>
      </Table>
    </div>
  );
};

export default CustomRequestList;
