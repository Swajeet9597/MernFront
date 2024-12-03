import React, { useEffect, useState } from 'react';
import './Resto.css'
const Resto = () => {

  const [exdeal, setExdeal] = useState([])

  const getData = async() =>{
    const response = await fetch(`http://localhost:8000/api/data/exdeal`,{
      method: "GET",

    })
    console.log(response)

     if(response.ok){
      const data = await response.json();
      console.log(data);
      setExdeal(data.msg)
     }
  }

  useEffect(()=>{
    getData()
  },[]);

  // console.log("sbahcghsc",exdeal[0])


  return (
    <div  className='restbox' >

        {/* {
          exdeal.map((ex)=>{
            <div className="restoimg1">
            <img src={ex.url} alt="" />
        </div>
          })
        } */}
{/* 
      <div className="restoimg1">
            <img src="Group11.png" alt="" />

        </div> */}
      <div className="restoimg1">
            <img src="Group11.png" alt="" />

        </div>
        <div className="restoimg1">
            <img src="Group11.png" alt="" />

        </div>
        <div className="restoimg1">
            <img src="Group12.png" alt="" />

        </div>
    </div>
  );
}

export default Resto;
