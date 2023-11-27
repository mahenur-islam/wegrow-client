
import { Button, Label, TextInput } from "flowbite-react";
import { SiNamecheap } from "react-icons/si";
import { FcGraduationCap } from "react-icons/fc";
import { BiLogoCodepen } from "react-icons/bi";
const AddAsset = () => {
    return (
        <div>
        <div
          className="min-h-screen flex items-center justify-between px-20 py-10 bg-cover bg-center bg-blue-100"
          style={{ backgroundImage: `url("https://i.ibb.co/rfHpRjg/admin2.png")` }}
        >
          <form className="flex max-w-md flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-red-300 w-[600px] ml-10">
            <h1 className="text-xl md:text-2xl font-semibold">
             Add A Product
            </h1>
            <div>
                <div className="mb-2 block">
                  <Label htmlFor="productname" value="Name *" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  icon={SiNamecheap}
                  placeholder=""
                  name="fullname"
                  required
                />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="type" value="Type *" />
                </div>
                <TextInput
                  id="name"
                  type="text"
                  icon={FcGraduationCap }
                  placeholder=""
                  name="companyName"
                  required
                />
              </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="productPhotoUrl" value="Image *" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={BiLogoCodepen}
                placeholder=""
                name="productPhotoUrl"
                required
              />
           </div>
            <Button type="submit" outline>
              Signup
            </Button>
          </form>
        </div>
      </div>
    );
};

export default AddAsset;