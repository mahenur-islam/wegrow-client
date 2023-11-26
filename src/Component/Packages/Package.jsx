import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";

const Package = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch('packages.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setPackages(data))
      .catch(error => console.error('Error fetching packages:', error));
  }, []);

  return (
   <div className="py-10">
   <div className="h-1 w-1/4 mx-auto bg-red-200 mb-3"></div>
    <h1 className="text-3xl font-semibold text-center mb-3">Packages</h1>
    <div className="h-1 w-1/4 mx-auto bg-red-200 mb-10"></div>
    <div className="grid grid-cols-1 md:grid-cols-3">
      {packages.map((pkg, index) => (
        <Card key={index} className='max-w-sm' style={{backgroundColor:pkg.color}}>
          <h5 className="mb-4 text-xl font-medium text-gray-800 dark:text-gray-400">{pkg.name}</h5>
          <div className="flex items-baseline text-gray-900 dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">{pkg.price}</span>
            <span className="ml-1 text-xl font-normal text-gray-800 dark:text-gray-400">/month</span>
          </div>
          <ul className="my-7 space-y-5 flex-grow">
            {pkg.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex space-x-3">
                <AiFillCaretRight />
                <span className="text-base font-normal leading-tight text-gray-800 dark:text-gray-400">{feature}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="inline-flex w-full justify-center rounded-lg bg-gray-800  px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800  dark:hover:ring-cyan-900"
          >
            Choose plan
          </button>
        </Card>
      ))}
    </div>
   </div>
  );
};

export default Package;
