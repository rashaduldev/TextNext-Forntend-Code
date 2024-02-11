/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Card = ({data}) => {
    console.log(data);
    const {
        id,
        image,
        firstName,
        lastName,
        email,
        company,
        address,
      } = data;
      
    console.log(data);
    return (
        <div className='m-5 lg:m-20'>
         <div className=' lg:w-[30%]'>
         <Link to={'/'}>
          <div className='flex items-center gap-7 shadow-xl p-5 m-2 rounded-xl mx-auto'>
            <FaArrowLeft className='text-2xl' />
            <h1 className='text-3xl font-bold text-blue-gray-900'>Back to Home</h1>    
            </div>
          </Link>
         </div>
              <div className="h-full flex-col rounded-2xl bg-white bg-clip-border text-gray-700 shadow-2xl lg:p-20">
 <div className='relative'>
 <div className="w-full rounded-xl text-white">
    <img className='h-[40%] w-[40%] lg:h-[20%] lg:w-[20%] mx-auto pt-5 rounded-lg'
      src={image}
      layout="fill"
    />
  </div>
 </div>
  <div className="p-6 text-center lg:text-center">
    <h5 className="mb-2 block font-sans text-xl lg:text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
    FirstName: {lastName}
    </h5>
    <h5 className="mb-2 block font-sans text-xl lg:text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
    LastName: {lastName}
    </h5>
    <h5 className="mb-2 block font-sans text-xl lg:text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
    Email: {email}
    </h5>
   <div>
   <h5 className="mb-2 block font-sans text-xl lg:text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
    Address
    </h5>
    <div className='flex w-full gap-5 mx-auto justify-center'>
        <div className="">
        <label className="block text-gray-700 text-sm font-bold mb-2 lg:text-xl leading-snug tracking-normal text-blue-gray-900">
            Street:{address?.state}
           </label>
         </div> <div className="mb-4">
           <label className="block text-gray-700 text-sm font-bold mb-2 lg:text-xl leading-snug tracking-normal text-blue-gray-900">
             City:{address?.city}
           </label>
         </div>
        </div>
   </div>
    <h5 className="mb-2 block font-sans text-xl lg:text-3xl leading-snug tracking-normal text-blue-gray-900 antialiased font-bold my-5">
    CompanyName: {company?.name}
    </h5>
  </div>
 
</div>
        </div>
    );
};

export default Card;


