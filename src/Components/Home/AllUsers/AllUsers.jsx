/* eslint-disable no-unsafe-optional-chaining */
import { useState } from 'react';
import AddUserForm from '../AddUserForm/AddUserForm';
import AllUser from '../AllUser/AllUser';
import SortedUser from '../SortedUser/SortedUser';

/* eslint-disable react/prop-types */
const AllUsers = ({ allCard, getItems }) => {
  const [sortedUsers, setSortedUsers] = useState(allCard?.users);

  const handleSort = (sortType) => {
    let sortedArray = [];
  
    switch (sortType) {
      case 'name':
        sortedArray = [...allCard?.users].sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case 'email':
        sortedArray = [...allCard?.users].sort((a, b) => a.email.localeCompare(b.email));
        break;
      case 'companyName':
        sortedArray = [...allCard?.users].sort((a, b) => a.company.name.localeCompare(b.companyName));
        break;
      default:
        sortedArray = [...allCard?.users];
    }
  
    setSortedUsers(sortedArray);
  };

  const allUsers = sortedUsers?.length + getItems.length;

  return (
    <div className="">
      <div className="flex items-center justify-between">
        <SortedUser onSort={handleSort} />
        <h1 className="pr-[520px] text-xl font-bold">Total Users: {allUsers}</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6 mx-5">
            {sortedUsers?.map((card) => (
              <AllUser key={card.id} card={card} />
            ))}
          </div>
        </div>
        <div className="w-[30%]">
          <AddUserForm />
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
