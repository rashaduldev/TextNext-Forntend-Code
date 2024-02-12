/* eslint-disable no-unused-vars */
// /* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner/Banner";
import AllUsers from "./AllUsers/AllUsers";
import { toast } from "react-toastify";
import axios from "axios";

const Home = () => {
  const allCard = useLoaderData();
  console.log(allCard.users.length);
  const [filteredItems, setFilteredItems] = useState(allCard.users);
  const [getItems, setGetItems] = useState([]);
  const [local, setLocal] = useState([]);
  const [finalData, setFinalData] = useState(allCard.users);
  const [inputValues, setInputValues] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    companyName: '',
  });

  useEffect(()=>{
    setFinalData(allCard.users)
  },[allCard]);

  // useEffect(() => {
  //   setLocal((prevLocal) => {
  //     const newArray = [...prevLocal, local];
  //     return newArray;
  //   });
  //   const localstorageGetItems = JSON.parse(localStorage.getItem('inputValuesArray'));
  //   setGetItems(localstorageGetItems || []);
  // }, [allCard]);
  
  

  // Callback to update filtered items based on search query
  const handleSearch = (searchQuery) => {
    // console.log("Search Query:", searchQuery);
  
    if (searchQuery.trim() === "") {
      // If the search query is empty, reset to all items
      setFinalData(finalData);
    } else {
      // Filter items based on search query
      const filtered = finalData.filter((item) =>
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      // console.log("Filtered:", filtered);
      setFinalData(filtered);
    }
  };
  // console.log(finalData);
  const resetForm = () => {
    setInputValues({
      avatar: ' ',
      firstName: ' ',
      lastName: ' ',
      email: ' ',
      street: ' ', // Reset street value
      city: ' ',   // Reset city value
      companyName: ' ',
    });
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const avatar = form.avatar.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const street = form.street.value;
    const city = form.city.value;
    const companyName = form.companyName.value;
  
    const userInputValue = {
      avatar,
      firstName,
      lastName,
      address:{city:city,state:street},
      company:{name:companyName},
      email,
    };
  console.log(userInputValue);
  axios({
    method: 'post',
    url: 'https://dummyjson.com/users/add',
    data: userInputValue,
  })
  .then((response) => {
    console.log(response);
    toast.success("User added successfully");
  })
  .catch((error) => {
    console.error('Error:', error);
    toast.error("Error:",error);
  });
  
  setFinalData([userInputValue,...finalData])
  
    // Display success toast
   
  
    // Reset the form
    resetForm();
  };

  return (
    <div>
      <div className="layout-container">
        <div className="overlay"></div>
        <Banner onSearch={handleSearch} />
      </div>

      <AllUsers allCard={finalData} inputValues={inputValues} setInputValues={setInputValues}  handleFormSubmit={handleFormSubmit}/>
    </div>
  );
};

export default Home;
