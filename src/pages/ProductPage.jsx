import React, {useState, useEffect} from 'react';
import './ProductPage.css'
import NavBar from '../components/NavBar';
import NavBar2 from '../components/NavBar2';
import NavbarM1 from '../mobileComponents/NavbarM1';
import NavbarM2 from '../mobileComponents/NavbarM2';
import ProductOption from '../components/ProductOption';
import Resto from '../components/Resto';
import RestoM from '../mobileComponents/RestoM';
import RestoProduct from '../components/RestoProduct';
import Map from '../components/Map';
import Review from '../components/Review';
import NavBar2P from '../components/NavBar2P';
import loc from '../assets/Location.png'
import ProductOpM from '../mobileComponents/ProductOpM';
import RestoPM from '../mobileComponents/RestoPM';
import RestoName from '../components/RestoName';
import Footer from '../components/Footer';
import RestoNameM from '../mobileComponents/RestoNameM';
import RestoNameMP from '../mobileComponents/RestoNameMP';
import RespoCustomerReview from '../mobileComponents/RespoCustomerReview';
import RestoProductAndCart from '../components/RestoProductAndCart';
import Cart from '../components/Cart';


const ProductPage = () => {

  const [selectCart, setSelectCart] = useState(false)
  const [selectCartM, setSelectCartM] = useState(false)

  const[selectItem, setSelectItem] = useState(null)
  const [cartData,setCartData] = useState([])


  async function getCartData(){
    const response = await fetch(`http://localhost:8000/api/product/cartAdd`,{
        method: "GET",
    })

    if(response.ok){
        const data = await response.json()
        
    console.log("fetched Cart data: ",data.msg);
    setCartData(data.msg)
    }

}

  function handleCart(){
    setSelectCartM(false)
  }

    const getScreen = () =>{ 
        return{
          width:window.innerWidth,
        };
      };
    
      const [screeSize, setScreenSize] = useState(getScreen());
    
      useEffect(()=>{
        const Screen = () =>{
            setScreenSize(getScreen());
        };
        window.addEventListener('resize', Screen);
    
      },[]);


      // useEffect(()=>{

       
      //   if(selectItem){

      //     console.log("useeffect selectitem")
          
      //     getCartInfo()
      //   }
     
      // },[selectItem])

     useEffect(()=>{
      getCartData()
     },[])
    


  return (
    
    <>
           {screeSize.width > 768 ? (
            <>

<div className="nav">
            <NavBar setSelectCart={setSelectCart} />
        </div>
        <div className="nav2">
            <NavBar2P/>
        </div>

        <div className="homepageIMG">
          <img src="productpage1.jpg" alt="" />
        </div>

        <div className="homeoOffP">
          <div className="homeOffh1P">
            <span>All Offers from McDonald’s East London</span>
          </div>
          <div className="homeOffnavP">
            <input type="text" placeholder='Search from menu...' />
            <img src="Search.png" alt="" />
          </div>
        </div>

        <div className="productNav">
            <ProductOption/>
        </div>

        
        <div className="restoBody">

          {selectCart ? <RestoProductAndCart setSelectItem={setSelectItem} selectItem={selectItem}/> : <RestoProduct setSelectItem={setSelectItem} selectItem={selectItem}/> }
             
            {/* <RestoProduct/> */}
        </div>

        <div className="homepageIMGP2">
          <img src="prodelivery.jpg" alt="" />
        </div>

        <div className='map' >
           <Map/>
        </div>

        <div className="review">
            <Review/>
        </div>

        <div className="homeOffh1P">
            <span>Similar Restaurants</span>
        </div>


        <div className="restonamesP">
              <RestoName/>
        </div>

       
        <div className="footerHome">
            <Footer/>
        </div>

        




            </>
           ):(

            <>

            {selectCartM ? <> 
               <div  className="mobcart">
                <div className="cartclose">
                  <img onClick={handleCart} src="close.png" alt="" />
                </div>
               <Cart cartData={cartData}  setCartData={setCartData} /> 
               </div> 
               
            </>
               
               
            : <><div className="nav1mobile">
            <NavbarM1/>
          </div>
          
          <div className="nav2mobile">
            <NavbarM2 setSelectCartM={setSelectCartM} />
          </div>

          <div className="addM">
           <img src={loc } alt="" /> <span>Lution Street, N4G-00....</span>
          </div>

          <div className="homepageIMG1M">
          <img src="RatingMob.jpg" alt="" />
        </div>
        



        <div className="productNavM">
            <ProductOpM/>
        </div>
        <div className="restoBody">
            <RestoPM cartData={cartData}  setCartData={setCartData}  />
        </div>

        <div className="homeOffh1PM">
            <span>Similar Restaurants</span>
        </div>        

        <div className="restonamesMP">
              <RestoNameMP/>
        </div>


        <div className="P_CustomerRiviews">
          <RespoCustomerReview/>
        </div>



        <div className='map' >
           <Map/>
        </div>


        

        <div className="footerHome">
            <Footer/>
        </div></>}
             


    



          {/* RatingMob.jpg */}
            
            </>
           )}
    </>



  );
}

export default ProductPage;
