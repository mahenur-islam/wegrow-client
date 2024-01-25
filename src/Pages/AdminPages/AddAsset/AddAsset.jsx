import { Button, Label, Select, TextInput } from "flowbite-react";
import { SiNamecheap } from "react-icons/si";
// import { imageUpload } from "../../../api/utils";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { BiLogoCodepen } from "react-icons/bi";

const AddAsset = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const assetName = form.assetName.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const type = form.type.value;
    const availability = form.availability.value;
    const imageUrl = form.imageUrl.value;
  
  
    const userEmail = user?.email;
  
    if (userEmail) {
      const formData = {
        assetName,
        price,
        type,
        quantity,
        availability,
        imageUrl,
        userEmail,
        addedAt: new Date().toISOString().split('T')[0]
      }
  
      try {
        const response = await fetch("https://wegrow-server.vercel.app/products", {
          method: "POST",
          headers:{
            'content-type': 'application/json'
          },
          body:JSON.stringify(formData)
    
        });
  
        const data = await response.json();
  
        if (response.ok) {
          toast.success(data.message);
          // Additional logic after successful product addition
        } else {
          toast.error(data.message || "Failed to add product");
        }
      } catch (error) {
        console.error("Error adding product:", error);
        toast.error("Failed to add product");
      }
    } else {
      toast.warning("Login First");
      navigate("/login", { state: { from: location } });
    }
  };
  

  return (
    <div>
      <div
        className="min-h-screen flex items-center justify-between px-20 py-10 bg-cover bg-center bg-blue-100"
        style={{
          backgroundImage: `url("https://i.ibb.co/rfHpRjg/admin2.png")`,
        }}
      >
        <form
          className="flex max-w-lg flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-red-300 w-[600px] ml-10"
          onSubmit={handleAddProduct}
        >
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
              required
            />
          </div>
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="type" value="Select Type" />
            </div>
            <Select name="type">
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
              <Label htmlFor="productPhotoUrl" value="Image *" />
            </div>
            <TextInput
                type="text"
                icon={BiLogoCodepen}
                placeholder=""
                name="imageUrl"
                required
              />
          </div>
          <Button type="submit" outline>
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AddAsset;
