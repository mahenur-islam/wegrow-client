import { Avatar, Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import Heading from "../../../../Component/Heading/Heading";

const RequestList = () => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://wegrow-server.vercel.app/custom-request')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProducts(data);
      });
  }, []);
  return (
    <div className="overflow-x-auto">
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
                <Table.Cell>{product?.price}</Table.Cell>
                <Table.Cell>
                  <Avatar img={product?.assetPhotoUrl} />
                </Table.Cell>
                {/* <Table.Cell>{product?.userEmail}</Table.Cell> */}
                {/* <Table.Cell>{product?.userDisplayName}</Table.Cell> */}
                <Table.Cell>{product?.assetDetails}</Table.Cell>
                <Table.Cell>{product?.additionalInfo}</Table.Cell>
                <Table.Cell className="flex gap-2">
                  <Button
                    color="failure"
                    outline
                    // onClick={() => {
                    //   handleDelete(product._id);
                    // }}
                  >
                    Delete
                  </Button>
                  <Button outline color="success">
                    Approve
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
  );
};

export default RequestList;
