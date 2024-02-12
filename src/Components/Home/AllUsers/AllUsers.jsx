/* eslint-disable no-unsafe-optional-chaining */
import { useEffect, useState } from 'react';
import AddUserForm from '../AddUserForm/AddUserForm';
import AllUser from '../AllUser/AllUser';
import SortedUser from '../SortedUser/SortedUser';

/* eslint-disable react/prop-types */
const AllUsers = ({ allCard,inputValues ,setInputValues,handleFormSubmit}) => {
  // const [serch,setSearch]=useState(allCard);


  console.log(allCard);
  const [sortedUsers, setSortedUsers] = useState([]);
  console.log(sortedUsers);
  useEffect(()=>{
    setSortedUsers(allCard)
  },[allCard])

  const handleSort = (sortType) => {
    let sortedArray = [];
  
    switch (sortType) {
      case 'name':
        sortedArray = [...allCard].sort((a, b) => a.firstName.localeCompare(b.firstName));
        break;
      case 'email':
        sortedArray = [...allCard].sort((a, b) => a.email.localeCompare(b.email));
        break;
      case 'companyName':
        sortedArray = [...allCard].sort((a, b) => a.company.name.localeCompare(b.companyName));
        break;
      default:
        sortedArray = [...allCard];
    }
  
    setSortedUsers(sortedArray);
  };

  // const allUsers = sortedUsers?.length + getItems.length;
  // const allUser=[...sortedUsers];
  // console.log(allUser);


  return (
    <div className="">
      <div className="flex flex-row items-center justify-between">
        <SortedUser onSort={handleSort} />
        <h1 className="lg:pr-[520px] text-xl font-bold">Total Users: {sortedUsers.length}</h1>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-[70%]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6 mx-5">
            {sortedUsers?.map((card) => (
              <AllUser key={card.id} card={card} />
            ))}
          </div>
        </div>
        <div className="lg:w-[30%]">
          <AddUserForm inputValues={inputValues} setInputValues={setInputValues}  handleFormSubmit={handleFormSubmit}/>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
