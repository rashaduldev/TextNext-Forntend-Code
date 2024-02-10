import { useState } from 'react';

const AddUserForm = () => {
  // State to manage input values
  const [inputValues, setInputValues] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    companyName: '',
  });
  const [localStorageData, setLocalStorageData] = useState([]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Function to handle button click and set data in local storage
  const handleButtonClick = () => {
    // Create a new array by spreading the old array and adding the new values
    const newArray = [...localStorageData, inputValues];

    // Update the state with the new array
    setLocalStorageData(newArray);

    // Set the new array in local storage
    localStorage.setItem('inputValuesArray', JSON.stringify(newArray));
  };

  return (
    <div className="container mx-auto mt-8 lg:pr-4">
       <h1 className='text-2xl font-bold p-2 text-center'>Add User Form</h1>
      <form className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        {/* Avatar input field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
            Avatar
          </label>
          <input
            type="text"
            id="avatar"
            name="avatar"
            value={inputValues.avatar}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* First Name input field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={inputValues.firstName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Last Name input field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={inputValues.lastName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Email input field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={inputValues.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Address input field */}
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            Address
          </label>
       <div className='flex w-full gap-5 mx-auto'>
       <div className="mb-4 w-[50%]">
       <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
           Street
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={inputValues.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div> <div className="mb-4 w-[50%]">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
            City
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={inputValues.address}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
       </div>

        {/* Company Name input field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={inputValues.companyName}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Button to set data in local storage */}
        <button
          type="button"
          onClick={handleButtonClick}
          className="bg-blue-500 text-white  py-2 px-4 rounded-md w-full p-2  hover:bg-blue-600"
        >
         Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
