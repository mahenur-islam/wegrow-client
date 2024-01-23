/* eslint-disable react/prop-types */

import { Button, TextInput } from "flowbite-react";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditProduct = ({ productId, onEdit }) => {

  const singleProduct = useLoaderData();
  console.log(singleProduct);
  const {assetName, type, availabity, addedAt, quantity, price} = singleProduct;
  const [editedProduct, setEditedProduct] = useState({
    assetName: assetName,
    type: type,
    quantity: quantity,
    addedAt: addedAt,
    price: price,
    availabity: availabity
  });


  const handleEdit = () => {
    // Send a PUT request to update the product
    fetch(`http://localhost:5000/products/${productId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        // Handle the response, you can show a success message or navigate to another page
        console.log(data);
        onEdit(); // Trigger any callback needed after successful edit
      })
      .catch((error) => {
        console.error("Error editing product:", error);
        // Handle errors
      });
  };

  return (
    <div>
      {/* Render a form with input fields for editing product details */}
      <TextInput
        type="text"
        placeholder="Asset Name"
        value={editedProduct.assetName}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, assetName: e.target.value })
        }
      />
      <TextInput
        type="text"
        placeholder="Type"
        value={editedProduct.type}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, type: e.target.value })
        }
      />
      <TextInput
        type="number"
        placeholder="Quantity"
        value={editedProduct.quantity}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, quantity: e.target.value })
        }
      />
      <TextInput
        type="text"
        placeholder="Added Date"
        value={editedProduct.addedAt}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, addedAt: e.target.value })
        }
      />
      <TextInput
        type="number"
        placeholder="Price"
        value={editedProduct.price}
        onChange={(e) =>
          setEditedProduct({ ...editedProduct, price: e.target.value })
        }
      />
      <Button onClick={handleEdit}>Update Product</Button>
    </div>
  );
};

export default EditProduct;
