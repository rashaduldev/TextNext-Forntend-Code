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
      <Link to={`/user/${id}`}>
        <div
          className="relative flex  flex-col rounded-xl bg-clip-border text-gray-700 shadow-2xl cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-t-md bg-white bg-clip-border text-gray-700">
            <img src={image} className="h-3/6 w-full object-cover" />
          </div>
          <div className="p-6">
            <div>
              <div className="flex flex-row items-center gap-2 text-xl">
              <p  className="leading-relaxed text-blue-gray-900 antialiased font-bold"
              >FirstName:
              </p>
              <p>{firstName}</p>
              </div>
              <div className="flex flex-row items-center gap-2 text-xl">
              <p  className="leading-relaxed text-blue-gray-900 antialiased font-bold"
              >LastName:
              </p>
              <p>{lastName}</p>
              </div>
              <div className="flex flex-row items-center gap-2 text-xl">
              <p  className="leading-relaxed text-blue-gray-900 antialiased font-bold"
              >Email:
              </p>
              <p>{email}</p>
              </div>
              <p className="leading-relaxed text-blue-gray-900 antialiased font-bold text-xl">Address:--</p>
             <div className="flex flex-row gap-5">
             <div className="flex flex-row items-center gap-2">
              <p
              >City:
              </p>
              <p>{address.city}</p>
              </div>
              <div className="flex flex-row items-center gap-2">
              <p
              >State:
              </p>
              <p>{address.state}</p>
              </div>
             </div>
            </div>
            <div  className="flex flex-row items-center gap-2"
            >
             <p
              className="block font-sans text-base  leading-relaxed text-blue-gray-900 antialiased font-bold"
              > Company Name:</p>
             {company.name}
            </div>
          </div>
          <div className="p-6 pt-0"></div>
        </div>
      </Link>
    </div>
  );
};

export default AllUser;