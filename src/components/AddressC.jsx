import React, { useEffect, useState } from 'react';
import './AddressC.css'
import AddAdress from './AddAdress';
import { BASE_URL } from '../services/helper';

const AddressC = ({setSelect,render,setRender}) => {

    const [addresses, setAddresses] = useState([])

    function handleOnclick(add){
        console.log("remove")
        console.log(add)
    }
    
   function handleAdd(){
    setSelect(false)
   }

    const getAdd = async()=>{
        const response = await fetch(`${BASE_URL}/api/order/address`,{
            method: "GET",
        })

        if(response.ok){
            let data = await response.json()
            setAddresses(data.msg)
        }
    }

    // console.log(addresses)

    useEffect(()=>{
         getAdd()
    },[render])

  return (

    <>


    <div className='AddressC'>
         <div className="addAdd">
             <img onClick={handleAdd} src="Group239181.png" alt="" />
         </div>

         {addresses.map((add)=>(
             <div className="fetchAdd">
                <div className="tt">
                   <span>Mike Ross</span>
                   <span>{add.address}</span>
                   <span>Phone Number: {add.number}</span>
                </div>
                <div className="bb">
                    <span className='addspan' >Edit</span>
                    <img src="Line25.png" alt="" />
                    <span onClick={()=>handleOnclick(add)} className='addspan'>Remove</span>
                </div>
             </div>
         ))}

       

    </div>

   
         </>
  );
}

export default AddressC;
