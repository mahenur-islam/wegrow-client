import { Button, Label, Select, TextInput } from "flowbite-react";
import { SiNamecheap } from "react-icons/si";
import { imageUpload } from "../../../api/utils";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddAsset = () => {
  const navigate = useNavigate('/');
  const location = useLocation();
  const { user } = useAuth();
  const handleAddProduct = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const type = form.type.value;
    const availability = form.availability.value;
    const image = form.productPhotoUrl.files[0];
    const imageData = await imageUpload(image);
    console.log(imageData, availability, type, name, user?.email);
    if(user && user.email){
      // send item to database 
        // email: user.email;
    }else{
      toast.warning('Login First');
      navigate('/login', {state: {from: location}});
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
          className="flex max-w-md flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-red-300 w-[600px] ml-10"
          onSubmit={handleAddProduct}
        >
          <h1 className="text-xl md:text-2xl font-semibold">Add A Product</h1>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name *" />
            </div>
            <TextInput
              id="name"
              type="text"
              icon={SiNamecheap}
              placeholder=""
              name="name"
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
          <div className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="availability" value="Select Availability" />{" "}
              {/* Fix here */}
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
              type="file"
              accept="image/*"
              placeholder=""
              name="productPhotoUrl"
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
