/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const AllUser = ({ card }) => {
  const {
    id,
    image,
    firstName,
    lastName,
    email,
    company,
    address,
  } = card;
  return (
    <div>
      <Link to={`/catagory/${id}`}>
        <div
          className="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 shadow-2xl cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-t-md bg-white bg-clip-border text-gray-700">
            <img src={image} className="h-3/6 w-full object-cover" />
          </div>
          <div className="p-6">
            <div>
              <p>FirstName:{firstName}</p>
              <p>LastName:{lastName}</p>
              <p>Email:{email}</p>
              <p>Address:{address.city}</p>
              <p>Address:{address.state}</p>
              <p>Address:{address.suite}</p>
            </div>
            <p
              className="block font-sans text-base  leading-relaxed text-blue-gray-900 antialiased font-bold"
            >
              Company Name:{company.name}
            </p>
          </div>
          <div className="p-6 pt-0"></div>
        </div>
      </Link>
    </div>
  );
};

export default AllUser;