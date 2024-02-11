import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";


const UserDetails = () => {
    const [data,setData]=useState([]);
    const {id}=useParams();
    // console.log(id);
    const dataLoad=useLoaderData();
    // console.log(dataLoad);
useEffect(()=>{
    const findPhone=dataLoad.users.find(daata=>daata.id==id);
    setData(findPhone);
},[id,dataLoad])
    console.log(data);
    
    return (
        <div className=''>
            <Card data={data}></Card>
        </div>
    );
};
export default UserDetails;