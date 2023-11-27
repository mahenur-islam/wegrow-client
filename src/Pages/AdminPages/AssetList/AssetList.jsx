import { Button, TextInput } from "flowbite-react";
import Filter from "../Filter/Filter";
import SortQuantity from "../SortQuantity/SortQuantity";
import Products from "../Products/Products";

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

      <div className="grid grid-cols-12 gap-5 mt-10">
        {/* <------ Filter Section ------> */}

        <div className="col-span-2 shadow-xl">
          <Filter></Filter>
        </div>

        {/* <---------All Products ---------> */}
        <div className="col-span-8 shadow-xl p-3">
          <Products></Products>
        </div>
        {/* <------- Sorting Section ---------> */}

        <div className="col-span-2 shadow-lg h-28 p-4 bg-red-100 rounded-lg">
          <SortQuantity></SortQuantity>
        </div>
      </div>
    </div>
  );
};

export default AssetList;
