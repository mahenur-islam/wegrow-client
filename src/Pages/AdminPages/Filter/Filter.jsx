import  { useState } from "react";

const AssetList = () => {
  // State for filter options
  const [stockStatus, setStockStatus] = useState("all");
  const [assetType, setAssetType] = useState("all");

  // Function to handle filter changes
  const handleStockStatusChange = (value) => {
    setStockStatus(value);
    // Add logic to apply filters to your data
  };

  const handleAssetTypeChange = (value) => {
    setAssetType(value);
    // Add logic to apply filters to your data
  };

  return (
    <div className="flex flex-col space-y-10 w-1/6 bg-gray-100 p-5 rounded-md">
      {/* Stock Status Filter */}
      <div className="space-y-2 ">
        <label className="text-gray-700 dark:text-white font-semibold text-xl">Stock Status:</label>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="allStock"
            name="stockStatus"
            value="all"
            checked={stockStatus === "all"}
            onChange={() => handleStockStatusChange("all")}
          />
          <label htmlFor="allStock">All</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="available"
            name="stockStatus"
            value="available"
            checked={stockStatus === "available"}
            onChange={() => handleStockStatusChange("available")}
          />
          <label htmlFor="available">Available</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="out-of-stock"
            name="stockStatus"
            value="out-of-stock"
            checked={stockStatus === "out-of-stock"}
            onChange={() => handleStockStatusChange("out-of-stock")}
          />
          <label htmlFor="out-of-stock">Out of Stock</label>
        </div>
      </div>

      {/* Asset Type Filter */}
      <div className="space-y-2">
        <label className="text-gray-700 dark:text-white font-semibold text-xl ">Asset Type:</label>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="allAsset"
            name="assetType"
            value="all"
            checked={assetType === "all"}
            onChange={() => handleAssetTypeChange("all")}
          />
          <label htmlFor="allAsset">All</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="returnable"
            name="assetType"
            value="returnable"
            checked={assetType === "returnable"}
            onChange={() => handleAssetTypeChange("returnable")}
          />
          <label htmlFor="returnable">Returnable</label>
        </div>
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="non-returnable"
            name="assetType"
            value="non-returnable"
            checked={assetType === "non-returnable"}
            onChange={() => handleAssetTypeChange("non-returnable")}
          />
          <label htmlFor="non-returnable">Non-Returnable</label>
        </div>
      </div>
    </div>
  );
};

export default AssetList;
