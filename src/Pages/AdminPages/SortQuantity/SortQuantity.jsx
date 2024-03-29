/* eslint-disable react/prop-types */
import  { useState } from "react";

const SortQuantity = ({ onSortChange }) => {
  // State for sorting option
  const [sortOption, setSortOption] = useState("default");

  // Function to handle sorting changes
  const handleSortChange = (event) => {
    const selectedSortOption = event.target.value;
    setSortOption(selectedSortOption);
    onSortChange(selectedSortOption);
  };


  return (
    <div className="mb-4">
    <label htmlFor="sortOption" className="text-gray-700 dark:text-white block">
      Sort By Quantity:
    </label>
    <select
      id="sortOption"
      name="sortOption"
      value={sortOption}
      onChange={handleSortChange}
      className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
    >
      <option value="default">Default</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
  );
};

export default SortQuantity;
