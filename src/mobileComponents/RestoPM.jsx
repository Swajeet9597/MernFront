import React from 'react';
import { useState, useEffect } from "react";
import './RestoPM.css'
import { BASE_URL } from '../services/helper';


const RestoPM = ({cartData, setCartData}) => {

    const[burger,setBurger] = useState([])
   const[fries,setFries] = useState([])
   const[cold,setCold] = useState([])

  async function handleAddCart(item){
    //   console.log(b)
    // setSelectItem({
    //    ...selectItem,
    //    title:b.title,
    //    price:b.price
    // })
    const response = await fetch(`${BASE_URL}/api/product/cartAdd`,{
      method:"POST",
      credentials: "include",
      headers:{
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item)
    })
   
    if (response.ok) {
        const updatedResponse = await fetch(`${BASE_URL}/api/product/cartAdd`, {
          method: "GET",
        });
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          console.log("rrerererer",updatedData.msg);
          setCartData(updatedData.msg);
        }
    }
     
   }

   async function getBerg (){
        const response = await fetch(`${BASE_URL}/api/data/burger`,{
            method: "GET",
        })
    
     console.log(response)

     if(response.ok){
      const data = await response.json();
      console.log(data);
      setBurger(data.msg)
     }


   }



   async function getFries (){
    const response = await fetch(`${BASE_URL}/api/data/fries`,{
        method: "GET",
    })

 console.log(response)

 if(response.ok){
  const data = await response.json();
  console.log(data);
  setFries(data.msg)
 }


}


async function getCold (){
    const response = await fetch(`${BASE_URL}/api/data/colddrinks`,{
        method: "GET",
    })

 console.log(response)

 if(response.ok){
  const data = await response.json();
  console.log(data);
  setCold(data.msg)
 }


}


   useEffect(()=>{
    getBerg()
    getCold()
    getFries()
  },[]);



  console.log("bb",burger)
  console.log("bb",fries)
  console.log("bb",cold)




  return (
    <div className="restboxP">
           


            <span>Burgers</span>

         

            <div className="burgerBoxM">
                

            {burger.map((b)=>(
                <div className="burgerBox1M">
                <div className="burgerText">
                    <p>{b.title}</p>
                    <p>{b.desc}</p>
                    <p>₹ {b.price}</p>
                </div>
                <div className="burgerImg">
                    <img className="burgimg1" src="Rectangle46.png" alt="" />
                    <img className="burgimg2" src="Rectangle47.png" alt="" />
                    <img onClick={()=>handleAddCart(b)} className="burgerpluse" src="Plus.png" alt="" />
                </div>
            </div>
            ))}


            </div>






            <span className="fries" style={{color:"#FC8A06"}} >Fries</span>

<div className="burgerBoxM">

    {fries.map((f)=>(
        <div className="burgerBox1M">
        <div className="burgerText">
            <p>{f.title}</p>
            <p>{f.desc}</p>
            <p>₹ {f.price}</p>
        </div>
        <div className="burgerImg">
            <img className="burgimg1" src="Rectangle48.png" alt="" />
            <img className="burgimg2" src="Rectangle47.png" alt="" />
            <img onClick={()=>handleAddCart(f)} className="burgerpluse" src="Plus.png" alt="" />
        </div>
    </div>
    ))}

</div>




<span  style={{color:"#FC8A06"}} >Cold Drinks</span>

<div className="burgerBoxM">


    {cold.map((c)=>(
         <div className="burgerBox1M">
         <div className="burgerText">
             <p>{c.title}</p>
             <p>{c.desc}</p>
             <p>₹ {c.price}</p>
         </div>
         <div className="burgerImg">
             <img className="burgimg1" src="Rectangle49.png" alt="" />
             <img className="burgimg2" src="Rectangle47.png" alt="" />
             <img onClick={()=>handleAddCart(c)} className="burgerpluse" src="Plus.png" alt="" />
         </div>
     </div>
 
    ))}
   
</div>
        </div>
  );
}

export default RestoPM;
