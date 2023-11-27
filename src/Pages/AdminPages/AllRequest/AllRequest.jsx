import { Button, TextInput } from "flowbite-react";
import RequestList from "./RequestList/RequestList";

const AllRequest = () => {
  return (
    <div>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-center mb-5">
          All Requests
        </h1>
        <div>
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <TextInput
              id="base"
              type="text"
              sizing="md"
              placeholder="Search by name or email..."
              className="w-1/3 shadow-xl mx-auto"
            />
            <Button>Search</Button>
          </div>
        </div>
        <div className="min-h-[50vh]">
        <RequestList></RequestList>
        </div>
      </div>
    </div>
  );
};

export default AllRequest;
