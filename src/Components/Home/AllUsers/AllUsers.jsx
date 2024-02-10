import AddUserForm from "../AddUserForm/AddUserForm";
import AllUser from "../AllUser/AllUser";
import SortedUser from "../SortedUser/SortedUser";

/* eslint-disable react/prop-types */
const AllUsers = ({allCard}) => {
    console.log(allCard.users.length);
    return (
       <div className="">
        <SortedUser></SortedUser>
         <div className="flex flex-col lg:flex-row"> 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6 mx-5 w-[70%]">
          {
                allCard?.users?.map(card=> <AllUser key={card.id} card={card}></AllUser>)
          }
          </div>
          <div className="w-[30%]">
            <AddUserForm></AddUserForm>
          </div>
        </div>
       </div>
    );
};

export default AllUsers;