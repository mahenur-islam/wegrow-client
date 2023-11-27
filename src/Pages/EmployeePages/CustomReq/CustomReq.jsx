import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { SiNamecheap } from "react-icons/si";
import { BiLogoCodepen } from "react-icons/bi";
const CustomReq = () => {
  return (
    <div className="min-h-screen bg-cover bg-center w-full p-5">
      <h1 className="text-xl md:text-2xl font-semibold font-serif text-center py-10">
        Make A Custom Request
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <form className="flex max-w-lg flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-gray-700">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="asset name" value="Asset Name *" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={SiNamecheap}
                placeholder=""
                name="assetName"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {" "}
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price *" />
                </div>
                <TextInput
                  id="email"
                  type="number"
                  icon={HiMail}
                  placeholder="$"
                  required
                />
              </div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="Asset Type" value="Asset Type" />
                </div>
                <Select id="assetType" required>
                  <option>Returnable</option>
                  <option>Non-Returnable</option>
                </Select>
              </div>
            </div>

            <div>
              <div className="mb-2 block">
                <Label htmlFor="assetPhotoUrl" value="Asset Image *" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={BiLogoCodepen}
                placeholder=""
                name="assetPhotoUrl"
                required
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Why you need this ? *" />
              </div>
              <Textarea
                id="comment"
                placeholder="Write in details..."
                required
                rows={4}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="comment" value="Additional Info *" />
              </div>
              <Textarea
                id="comment"
                placeholder="Write in details..."
                required
                rows={3}
              />
            </div>
            <Button type="submit" outline>
              Request
            </Button>
          </form>
        </div>
        <div>
            <img src="https://i.ibb.co/0Jx7RQy/admin7.png" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default CustomReq;
