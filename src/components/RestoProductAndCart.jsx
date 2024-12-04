import React, { useState, useEffect } from "react";
import './RestoProductAndCart.css'
import Cart from "./Cart";
import {BASE_URL} from '../services/helper'

const RestoProductAndCart = ({selectItem,setSelectItem}) => {
    const [cartData,setCartData] = useState([])
    const [burger, setBurger] = useState([])
    const [fries, setFries] = useState([])
    const [cold, setCold] = useState([])
        

   async function handleAddCart(item){
        const response = await fetch(`${BASE_URL}/api/product/cartAdd`,{
          method:"POST",
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
    
  
// this function for intial level fetching.....  for 1st time when refrash
    async function getCartData(){
        const response = await fetch(`${BASE_URL}/api/product/cartAdd`,{
            method: "GET",
        })

        if(response.ok){
            const data = await response.json()
            
        console.log("fetched Cart data: ",data.msg);
        setCartData(data.msg)
        }

    }

    async function getBerg() {
        const response = await fetch(`${BASE_URL}/api/data/burger`, {
            method: "GET",
        })

        console.log(response)

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setBurger(data.msg)
        }


    }
    async function getFries() {
        const response = await fetch(`${BASE_URL}/api/data/fries`, {
            method: "GET",
        })

        console.log(response)

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setFries(data.msg)
        }


    }


    async function getCold() {
        const response = await fetch(`${BASE_URL}/api/data/colddrinks`, {
            method: "GET",
        })

        console.log(response)

        if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setCold(data.msg)
        }


    }
    useEffect(() => {
        getBerg()
        getCold()
        getFries()
        getCartData()
    }, []);
    
     

    return (



        <div className="restboxPC">

           <div className="restboxPCleft">

          
            
            <div className="productHeadC">
                <div className="restoimg1PC">
                    <img src="Group23.png" alt="" />
                </div>
                <div className="restoimg1PC">
                    <img src="Group24.png" alt="" />
                </div>
                <div className="restoimg1PC">
                    <img src="Group25.png" alt="" />
                </div>
            </div>


            <span>Burgers</span>



            <div className="burgerBoxC">


                {burger.map((b) => (
                    <div className="burgerBox1C">
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






            <span className="fries" style={{ color: "#FC8A06" }} >Fries</span>

            <div className="burgerBox">

                {fries.map((f) => (
                    <div className="burgerBox1C">
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




            <span style={{ color: "#FC8A06" }} >Cold Drinks</span>

            <div className="burgerBox">


                {cold.map((c) => (
                    <div className="burgerBox1C">
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

            <div className='restboxPCright' >
                <Cart cartData={cartData} setCartData={setCartData}/>
            </div>




        </div>
    );
}

export default RestoProductAndCart;
