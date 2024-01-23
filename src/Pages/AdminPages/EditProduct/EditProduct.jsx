/* eslint-disable react/prop-types */

import { Button, Label, Select, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from "react-hot-toast";
import { BiLogoCodepen } from "react-icons/bi";
import { SiNamecheap } from "react-icons/si";
import { useLoaderData } from "react-router-dom";

const EditProduct = () => {
  const singleProduct = useLoaderData();
  console.log(singleProduct);
  const { _id, assetName, type, availabity, addedAt, quantity, price } =
    singleProduct;
  const [editedProduct, setEditedProduct] = useState({
    assetName: assetName,
    type: type,
    quantity: quantity,
    addedAt: addedAt,
    price: price,
    availabity: availabity,
  });

  const handleEdit = () => {
    // Send a PUT request to update the product
    fetch(`http://localhost:5000/products/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success('Product updated Successfully');
      })
      .catch((error) => {
        toast.error("Error editing product:", error);
       
      });
  };

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-between px-20 py-10 bg-cover bg-center bg-blue-100"
        style={{
          backgroundImage: `url("https://i.ibb.co/rfHpRjg/admin2.png")`,
        }}
      >
        <form className="flex max-w-lg flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-red-300 w-[600px] ml-10" onSubmit={handleEdit}>
          <h1 className="text-xl md:text-2xl font-semibold">Add A Product</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name *" />
            </div>
            <TextInput
              id="assetName"
              type="text"
              icon={SiNamecheap}
              placeholder=""
              name="assetName"
              value={editedProduct.assetName}
              onChange={(e) =>
                setEditedProduct({
                  ...editedProduct,
                  assetName: e.target.value,
                })
              }
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price *" />
              </div>
              <TextInput
                id="price"
                type="text"
                placeholder="$"
                name="price"
                value={editedProduct.price}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, price: e.target.value })
                }
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="type" value="Select Type" />
              </div>
              <Select
                name="type"
                value={editedProduct.type}
                onChange={(e) =>
                  setEditedProduct({ ...editedProduct, type: e.target.value })
                }
              >
                <option>Returnable</option>
                <option>Non-returnable</option>
              </Select>
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity *" />
            </div>
            <TextInput
              id="quantity"
              type="number"
              placeholder="Enter Quantity"
              name="quantity"
              value={editedProduct.quantity}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, quantity: e.target.value })
              }
              required
            />
          </div>

          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="availability" value="Select Availability" />
            </div>
            <Select name="availability" required>
              <option>Available</option>
              <option>Out-of-stock</option>
            </Select>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="imageUrl" value="Image *" />
            </div>
            <TextInput
              type="text"
              icon={BiLogoCodepen}
              placeholder=""
              name="imageUrl"
              value={editedProduct.imageUrl}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, imageUrl: e.target.value })
              }
              required
            />
          </div>
          <Button type="submit" outline>
            update Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
