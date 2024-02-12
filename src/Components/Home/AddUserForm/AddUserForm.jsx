/* eslint-disable react/prop-types */
import "react-toastify/dist/ReactToastify.css";

// eslint-disable-next-line react/prop-types
const AddUserForm = ({inputValues,setInputValues,handleFormSubmit}) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
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
             placeholder="image url"
             name="avatar"
             value={inputValues?.avatar}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
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
             placeholder="Type Firstname"
             value={inputValues.firstName}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
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
             placeholder="Type Lastname"
             value={inputValues.lastName}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
           />
         </div>
 
         {/* Email input field */}
         <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             Email
           </label>
           <input
             type="email"
             placeholder="Type email address"
             name="email"
             value={inputValues.email}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
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
             placeholder="Type Address Street"
             value={inputValues.street}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
           />
         </div> <div className="mb-4 w-[50%]">
           <label className="block text-gray-700 text-sm font-bold mb-2">
             City
           </label>
           <input
             type="text"
             name="city"
             placeholder="Type Address City"
             value={inputValues.city}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
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
             placeholder="Type CompanyName"
             value={inputValues.companyName}
             className="w-full p-2 border rounded"
             onChange={handleInputChange}
             required
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