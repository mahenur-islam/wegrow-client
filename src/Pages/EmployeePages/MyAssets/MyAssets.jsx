import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Heading from "../../../Component/Heading/Heading";

const MyAssets = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://wegrow-server.vercel.app/custom-request")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="my-10">
      <div className="mb-10">
      <Heading title={"My Asset"} center></Heading>
      </div>
      <div>
        <Table striped>
          <Table.Head>
            <Table.HeadCell>Asset name</Table.HeadCell>
            <Table.HeadCell>Asset Type</Table.HeadCell>
            <Table.HeadCell>Request Date</Table.HeadCell>
            <Table.HeadCell>Approval Date</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
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
                  <Table.Cell>{product?.assetType}</Table.Cell>
                  <Table.Cell>{product?.addedAt}</Table.Cell>
                  <Table.Cell>{product?.status}</Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <Button outline color="success">
                      Action
                    </Button>
                  </Table.Cell>
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
    </div>
  );
};

export default MyAssets;
