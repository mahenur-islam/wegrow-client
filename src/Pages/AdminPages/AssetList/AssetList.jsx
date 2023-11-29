import { Button, TextInput } from "flowbite-react";
import Filter from "../Filter/Filter";
import SortQuantity from "../SortQuantity/SortQuantity";
import Products from "../Products/Products";
import { useState } from "react";

const AssetList = () => {
  const [filters, setFilters] = useState({ stockStatus: "all", assetType: "all" });
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };
  const handleSortChange = (newSortOption) => {
    setSortOption(newSortOption);
  };

  const handleSearch = () => {
   console.log("Search query:", searchQuery);
  };
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
              value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button  onClick={handleSearch}>Search</Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-10">
        {/* <------ Filter Section ------> */}
        <div className="col-span-2 shadow-xl max-h-[40vh]">
        <Filter onFilterChange={handleFilterChange}></Filter>
      </div>
      <div className="col-span-8 shadow-xl p-3">
        <Products filters={filters} sortOption={sortOption}></Products>
      </div>

        {/* <------- Sorting Section ---------> */}

        <div className="col-span-2 shadow-lg h-28 p-4 bg-red-100 rounded-lg">
          <SortQuantity filters={filters} onSortChange={handleSortChange} searchQuery={searchQuery}></SortQuantity>
        </div>
      </div>
    </div>
  );
};

export default AssetList;
