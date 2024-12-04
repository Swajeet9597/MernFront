import React, { useState } from 'react';
import './AddAdress.css'
import { BASE_URL } from '../services/helper';

const AddAdress = ({setSelect,setRender,render}) => {

    const [add, setAdd] = useState([{
        address:"",
        number:""
    }])

  async function handleSave(e){
    
    

    e.preventDefault()
    setSelect(true)
    console.log(add);

    const response = await fetch(`${BASE_URL}/api/order/address`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
        },
        body: JSON.stringify(add)
    })

    console.log(response)

    if(response.ok){
      setRender(!render)
    }

  }

  function handleOnchange(e){
      let name = e.target.name;
      let value = e.target.value;

      setAdd({
        ...add,
        [name]:value
      })
  }



  return (
    <div className='AddAdress'>
      <div className="asasc">
         <div className="asd">
            <img src="location.png" alt="" />
            <span>Add Address</span>
         </div>
         <div className="state">
            <input onChange={handleOnchange} type="text" placeholder='State' />
            <input onChange={handleOnchange} type="text" placeholder='City/District' />
            <input onChange={handleOnchange} type="text" placeholder='Pin Code' />
            <input onChange={handleOnchange} type="text" name='number' placeholder='Phone Number' />
         </div>
         <textarea onChange={handleOnchange} name="address" id="" cols="30" rows="10"  placeholder='Enter full address' ></textarea>
         <div className='btnnn' ><button onClick={handleSave} >Save</button></div>
      </div>
    </div>
  );
}

export default AddAdress;
