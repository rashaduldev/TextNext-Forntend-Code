import { useState, useEffect } from 'react';

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
console.log(newUser);
  useEffect(() => {
    // Load form data from localStorage when the component mounts
    const storedUser = JSON.parse(localStorage.getItem('userForm')) || {};
    setNewUser(storedUser);
  }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setNewUser({ ...newUser, [name]: value });
//   };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submit');
    const form = e.target;
    const avatar = form.avatar.value;
    console.log(avatar);
    const inputElement = document.getElementById('inputId');
if (inputElement) {
  const inputValue = inputElement.value;
  console.log(inputValue);
  // Rest of the code
} else {
  console.error("Input element not found");
}
    // const firstName = form.firstName.value;
    // const lastName = form.lastName.value;
    // const email = form.email.value;
    // // const street = form.street.value;
    // const city = form.city.value;
    // const companyName = form.companyName.value;

    // const serviceUser = {
    //   avatar,
    //   firstName,
    //   lastName,
    //   email,
    //   street,
    //   city,
    //   companyName,
    // };
    // setNewUser(serviceUser);
    // console.log(newUser);
    // // Save the form data to localStorage
    // localStorage.setItem('userForm', JSON.stringify(serviceUser));

    // console.log(serviceUser);

    // Clear the form after submission
    // setNewUser({
    //   avatar: '',
    //   firstName: '',
    //   lastName: '',
    //   email: '',
    //   address: {
    //     street: '',
    //     suite: '',
    //     city: '',
    //   },
    //   company: {
    //     name: '',
    //   },
    // });
  };

  return (
    <div className='lg:pr-4'>
      <h1 className='text-2xl font-bold p-2 text-center'>Add User Form</h1>
      <form className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="avatar">
            Avatar URL:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="avatar"
            id='avatarr'
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="firstName"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="lastName"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email:
          </label>
          <input
            className="w-full px-3 py-2 border rounded-md"
            type="email"
            name="email"
            required
          />
        </div>

        <div className="mb-4 grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="street">
              Street:
            </label>
            <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="street"
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
              name="city"
              required
            />
          </div>
        </div>

        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="companyName">
            Company Name:
        </label>
        <input
            className="w-full px-3 py-2 border rounded-md"
            type="text"
            name="companyName"
            required
        />
        </div>

        <button onClick={handleSubmit} className="bg-blue-500 text-white py-2 px-4 rounded-md w-full" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUserForm;
