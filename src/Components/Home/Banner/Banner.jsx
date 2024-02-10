/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const Banner = ({ onSearch }) => {
const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

  return (
    <div>
        <div className="text-center items-center flex justify-center ">
      <div className="relative mx-1 p-10">
        <h1 className="text-3xl font-bold my-8 lg:text-5xl">
        Search based on the users name.
        </h1>
       <div>
       <input
          className="p-2 mt-8 w-full lg:w-3/4 rounded"
          style={{ border: "1px solid black" }}
          type="text"
          placeholder="Search here...."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
       
          <button
            style={{ borderRight: "1px solid black" }}
            className="text-white bg-red-500 p-2 rounded-r-sm absolute top-[209px] right-[41px] md:top-[173px] lg:top-[185px] lg:right-[133px]"
            onClick={handleSearch}
          >
            Search
          </button>
       </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
