import { Button, TextInput } from "flowbite-react";
import Filter from "../Filter/Filter";
import SortQuantity from "../SortQuantity/SortQuantity";

const AssetList = () => {
  return (
    <div>
      {/* <------ Searchbar Section ------> */}
      <div
        className="bg-cover bg-center relative h-[400px]"
        style={{ backgroundImage: 'url("https://i.ibb.co/02vYs7w/4.png")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col md:flex-row items-center gap-2">
            <TextInput
              id="base"
              type="text"
              sizing="md"
              placeholder="Search here . . ."
              className="w-96 shadow-xl "
            />
            <Button>Search</Button>
          </div>
        </div>
      </div>

      {/* <------ Filter Section ------> */}

      <div className="mt-10">
        <Filter></Filter>
      </div>

    
      {/* <------- Sorting Section ---------> */}

      <div>
        <SortQuantity></SortQuantity>
      </div>
    </div>
  );
};

export default AssetList;
