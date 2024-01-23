import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { SiNamecheap } from "react-icons/si";
import { BiLogoCodepen } from "react-icons/bi";
import toast from "react-hot-toast";
import useAuth from "../../../Hooks/useAuth";
const CustomReq = () => {
  const { user } = useAuth();

  const handleCustomRequest = event => {
    event.preventDefault();
    const form = event.target;
    const assetName = form.assetName.value;
    const price = form.price.value;
    const assetType = form.assetType.value;
    const assetPhotoUrl = form.assetPhotoUrl.value;
    const assetDetails = form.assetDetails.value;
    const additionalInfo = form.additionalInfo.value;
    const userEmail = user?.email;
    const userDisplayName = user?.displayName;

   const customRequestInfo = {
    assetName,
    price,
    assetType,
    assetPhotoUrl,
    assetDetails,
    additionalInfo,
    userDisplayName,
    userEmail,
    addedAt: new Date().toISOString().split('T')[0]
   }

   console.log(customRequestInfo);

   //send custom request to the server
   fetch('http://localhost:5000/custom-request', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body:JSON.stringify(customRequestInfo)
   })
   .then(res => res.json())
   .then(data => {
    // console.log(data);
    if(data.insertedId){
      toast.success('Request Completed')
    }
   })
  }


  return (
    <div className="min-h-screen bg-cover bg-center w-full p-5">
      <h1 className="text-xl md:text-2xl font-semibold font-serif text-center py-10">
        Make A Custom Request
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <form className="flex max-w-lg flex-col gap-4 bg-white p-10 rounded-lg shadow-2xl shadow-gray-700" onSubmit={handleCustomRequest}>
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
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="price" value="Price *" />
                </div>
                <TextInput
                  id="price"
                  type="number"
                  name="price"
                  placeholder="$"
                  required
                />
              </div>
              <div className="max-w-md">
                <div className="mb-2 block">
                  <Label htmlFor="Asset Type" value="Asset Type" />
                </div>
                <Select id="assetType" name="assetType" required>
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
                name='assetDetails'
                required
                rows={4}
              />
            </div>
            <div className="max-w-md">
              <div className="mb-2 block">
                <Label htmlFor="additional info" value="Additional Info *" />
              </div>
              <Textarea
                id="comment"
                placeholder="Write in details..."
                name="additionalInfo"
                required
                rows={3}
              />
            </div>
            <Button type="submit" outline>
             Make Request
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
