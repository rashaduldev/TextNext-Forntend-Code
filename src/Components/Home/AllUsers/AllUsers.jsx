import AllUser from "../AllUser/AllUser";

/* eslint-disable react/prop-types */
const AllUsers = ({allCard}) => {
    return (
        <div>
             
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 my-6 mx-5">
          {
                allCard?.users?.map(card=> <AllUser key={card.id} card={card}></AllUser>)
          }
          </div>
        </div>
    );
};

export default AllUsers;