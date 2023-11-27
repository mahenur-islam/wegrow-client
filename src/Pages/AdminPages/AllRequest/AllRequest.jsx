import { Button, TextInput } from "flowbite-react";
import RequestList from "./RequestList/RequestList";

const AllRequest = () => {
  return (
    <div className="grid grid-cols-12">
      <div
        className="bg-cover bg-center relative h-[400px] col-span-4 mt-10"
        // style={{ backgroundImage: 'url("https://i.ibb.co/FgZ4mf2/admin4.png")' }}
      >
        <div className="flex flex-col md:flex-row items-center gap-2">
            <TextInput
              id="base"
              type="text"
              sizing="md"
              placeholder="Search by name or email..."
              className="w-56 shadow-xl "
            />
            <Button>Search</Button>
          </div>
      </div>
      <div className="mt-10 col-span-8">
      <h1 className="text-2xl font-semibold text-center mb-10">All Requests</h1>
        <RequestList></RequestList>
      </div>

    </div>
  );
};

export default AllRequest;
