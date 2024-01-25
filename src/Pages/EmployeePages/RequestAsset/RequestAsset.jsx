import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Heading from "../../../Component/Heading/Heading";

const RequestAsset = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://wegrow-server.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div>
    <div className="my-10">
        <Heading center title={'Request Asset'}></Heading>
    </div>
      <Table>
        <Table.Head className="text-md text-red-800">
          <Table.HeadCell>Asset Name</Table.HeadCell>
          <Table.HeadCell>Asset Type</Table.HeadCell>
          <Table.HeadCell>Availability</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {products && products.length > 0 ? (
            products.map((product, index) => (
              <Table.Row
                key={index}
                className="bg-white dark:border-gray-700 dark:bg-gray-800 hover:bg-sky-100"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {product?.assetName}
                </Table.Cell>
                <Table.Cell>{product?.type}</Table.Cell>
                <Table.Cell>{product?.availability}</Table.Cell>
                <Table.Cell><Button outline>Request</Button></Table.Cell>
              </Table.Row>
            ))
          ) : (
            <div className="min-h-[calc(100vh-450px)] flex items-center justify-center">
              <Heading
                center={false}
                title={"No products found"}
                subTitle={"please add some product first"}
              />
            </div>
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default RequestAsset;
