import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddUserForm = () => {
  const [inputValues, setInputValues] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    companyName: '',
  });
  const [localStorageData, setLocalStorageData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };
    
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
      email,
      street,
      city,
      companyName,
    };
  
    // Update state and local storage
    const newArray = [...localStorageData, userInputValue];
    setLocalStorageData(newArray);
    localStorage.setItem('inputValuesArray', JSON.stringify(newArray));
  
    // Display success toast
    toast.success("User added successfully");
  
    // Reset the form
    resetForm();
  };

    return (
        <div className="container mx-auto mt-8 lg:pr-4">
        <h1 className='text-2xl font-bold p-2 text-center'>Add User Form</h1>
        <form onSubmit={handleFormSubmit} className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg">
         {/* Avatar input field */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Avatar
           </label>
           <input
             type="text"
             name="avatar"
             value={inputValues.avatar}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div>
 
         {/* First Name input field */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             First Name
           </label>
           <input
             type="text"
             name="firstName"
             value={inputValues.firstName}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div>
 
         {/* Last Name input field */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Last Name
           </label>
           <input
             type="text"
             name="lastName"
             value={inputValues.lastName}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div>
 
         {/* Email input field */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Email
           </label>
           <input
             type="email"
             id="email"
             name="email"
             value={inputValues.email}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div>
 
         {/* Address input field */}
         <label className="block text-gray-700 text-sm font-bold mb-2">
             Address
           </label>
        <div className='flex w-full gap-5 mx-auto'>
        <div className="mb-4 w-[50%]">
        <label className="block text-gray-700 text-sm font-bold mb-2">
            Street
           </label>
           <input
             type="text"
             name="street"
             value={inputValues.street}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div> <div className="mb-4 w-[50%]">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             City
           </label>
           <input
             type="text"
             name="city"
             value={inputValues.city}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div>
        </div>
 
         {/* Company Name input field */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Company Name
           </label>
           <input
             type="text"
             name="companyName"
             value={inputValues.companyName}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
           />
         </div>
 
         {/* Button to set data in local storage */}
         <input 
         className="bg-slate-900 text-white  py-2 px-4 rounded-md w-full p-2  hover:bg-slate-950 cursor-pointer"
         type="submit" 
         value="Add a user" 
         />
       </form>
       
     </div>
    );
};

export default AddUserForm;