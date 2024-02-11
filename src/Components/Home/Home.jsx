/* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import AllUsers from "./AllUsers/AllUsers";

const Home = () => {
  const allCard = useLoaderData();
  console.log(allCard.users.length);
  const [filteredItems, setFilteredItems] = useState(allCard);
  const [getItems, setGetItems] = useState([]);
  const [local, setLocal] = useState([]);

  useEffect(() => {
    setLocal((prevLocal) => {
      const newArray = [...prevLocal, local];
      return newArray;
    });
    const localstorageGetItems = JSON.parse(localStorage.getItem('inputValuesArray'));
    setGetItems(localstorageGetItems || []);
  }, [allCard]);
  
  

  // Callback to update filtered items based on search query
  const handleSearch = (searchQuery) => {
    console.log("Search Query:", searchQuery);
  
    if (searchQuery.trim() === "") {
      // If the search query is empty, reset to all items
      setFilteredItems(allCard);
    } else {
      // Filter items based on search query
      const filtered = allCard.users.filter((item) =>
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      console.log("Filtered:", filtered);
      setFilteredItems(filtered);
    }
  };
  

  return (
    <div>
      <div className="layout-container">
        <div className="overlay"></div>
        <Banner onSearch={handleSearch} />
      </div>

      <AllUsers allCard={filteredItems} getItems={getItems} />
    </div>
  );
};

export default Home;
