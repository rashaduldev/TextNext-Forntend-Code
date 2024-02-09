// components/AddUserForm.js

import { useState } from 'react';

const AddUserForm = () => {
  const [newUser, setNewUser] = useState({
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    address: {
      street: '',
      city: '',
    },
    company: {
      name: '',
    },
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

//   const resetForm = () => {
//     setNewUser({
//         avatar: '',
//         firstName: '',
//         lastName: '',
//         email: '',
//         address: {
//           street: '',
//           city: '',
//         },
//         company: {
//           name: '',
//         },
//     });
//   };
  console.log(newUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const avater = form.avater.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;
    const street = form.street.value;
    const city = form.city.value;
    const companyName = form.companyName.value;

    const serviceUser = {
        avater,
        firstName,
        lastName,
        email,
        street,
        city,
        companyName
    };
    console.log(serviceUser);
    // Clear the form after submission
    setNewUser({
      avatar: '',
      firstName: '',
      lastName: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
      },
      company: {
        name: '',
      },
    });
  };

  return (
   <div className='lg:pr-4'>
        <h1 className='text-2xl font-bold p-2 text-center'>Add User Form</h1>
     <form className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
      {/* Avatar */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
          Avatar URL:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          id="avatar"
          name="avatar"
          onChange={handleInputChange}
          required
        />
      </div>

      {/* First Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          id="firstName"
          name="firstName"
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Last Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          id="lastName"
          name="lastName"
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
          Email:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="email"
          id="email"
          name="email"
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Address */}
      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
            Street:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            id="street"
            name="street"
            onChange={handleInputChange}
            required
          />
        </div>
         <div>
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="city">
          City:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          id="city"
          name="city"
          onChange={handleInputChange}
          required
        />
         </div>
      </div>
     

      {/* Company Name */}
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
          Company Name:
        </label>
        <input
          className="w-full px-3 py-2 border rounded-md"
          type="text"
          id="companyName"
          name="companyName"
          onChange={handleInputChange}
          required
        />
      </div>

      {/* Submit button */}
      <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md w-full" type="submit">
        Add User
      </button>
    </form>
   </div>
  );
};

export default AddUserForm;
