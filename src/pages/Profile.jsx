
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import NavBarOrder from '../components/NavBarOrder';
import Footer from '../components/Footer';
import PaymentC from '../components/PaymentC';
import NavbarM1 from '../mobileComponents/NavbarM1';
import ProfileEditPg from '../components/ProfileEditPg';
import { BASE_URL } from '../services/helper';



const Profile = () => {

  const [activeEditCard, setActiveEditCard] = useState(true)

  function hanldeEditPayment(){
    setActiveEditCard(false)
  }

    const [activeEditProfile, setActiveEditProfile] = useState(true);

    const [render,setRender] = useState(true)

    function handleRender(){
      setRender(!render)
    }

    const [cardData, setCardData] = useState([])

    const getCardDetails = async()=>{
      const response = await fetch(`${BASE_URL}/api/card/cardInfo`,{
        method:"GET"
      })

      if(response.ok){
        let data = await response.json()
        setCardData(data.msg)
      }


    }

    
    const navigate = useNavigate()
    const [userData, setuserData] = useState([])

    const emailInfo = {
        "email": localStorage.getItem("email")
    }

    async function getUserData () {
      const response = await fetch(`${BASE_URL}/api/auth/user`,{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(emailInfo)
      })

      if(response.ok){
        let data = await response.json()
        setuserData(data.msg)
      }
    }

const handleBack=()=>{
    navigate('/home')
}


    const handleEditBtn = () => {
      setActiveEditProfile(false);
      // console.log("active");
    };
  
        
  const checkLogin = async(req,res)=>{
    try {
      
      const response = await fetch(`${BASE_URL}/api/auth/checkLogin`,{
        method:"GET",
        credentials:"include"
      })

      const data = await response.json()

      if(!data.success){
        navigate("/")
      }

    } catch (error) {
      console.log(error);
    }
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

useEffect(()=>{
  getUserData()
},[render])
useEffect(()=>{
  getUserData()
  getCardDetails()
},[])
useEffect(()=>{
  checkLogin()
},[])


  return (
  <>
  {screeSize.width > 768 ? <>

<div className="nav">
 <NavBar/>
</div>
<div className="nav2">
 <NavBarOrder/>
</div>


      
          <div className="profileBody">
            <p className="bodyHead">
              <img onClick={handleBack} src="arrow-left.png" alt="" />
              <img src="backIcon.png" alt="" />
              My Profile
            </p>
            <div className="body_profile">
              <div className="profileHead">
                <div>
                  <img src="profilePic.png" alt="" />
                  <p>{userData.name}</p>
                </div>
                <div onClick={handleEditBtn} className="editBtn">
                  Edit
                </div>
              </div>
              <div className="profileData">
                <div className="name_gender">
                  <div className="fname">
                    <p>Full Name</p>
                    <p>{userData.name}</p>
                  </div>
                  <div className="gender">
                    <p>Gender</p>
                    <p>Male</p>
                  </div>
                </div>
                <div className="email_country">
                  <div className="emailAdd">
                    <p>Email Address</p>
                    <p>{userData.email}</p>
                  </div>
                  <div className="country">
                    <p>Country</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="paymentMethod">
              <p>Saved Payment Methods</p>
              <div className="PaymentCards">

                {cardData.map((card)=>(
                  <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>{card.number}</p>
                    <p>{card.name}</p>
                  </div>
                  <img onClick={hanldeEditPayment} src="edit-3.png" alt="" />
                </div>
                ))}
                


                {/* <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>xxxx xxxx xxxx 1234</p>
                    <p>Mike Ross</p>
                  </div>
                  <img src="edit-3.png" alt="" />
                </div>


                <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>xxxx xxxx xxxx 1234</p>
                    <p>Mike Ross</p>
                  </div>
                  <img src="edit-3.png" alt="" />
                </div> */}



                <div className="addCardBtn">
                  <img src="btnImg3.png" alt="" />

                  <p>Add New Card</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footerHomeOPPPH">
 <Footer/>
</div>


          {activeEditProfile ? (
            <></>
        ) : (
          <div className="profileEdit">
            <ProfileEditPg handleRender={handleRender} setActiveEditProfile={setActiveEditProfile} />
          </div>
        )}


        {activeEditCard ? null :   <div className="profileEdit">
            <ProfileEditPg handleRender={handleRender} setActiveEditProfile={setActiveEditProfile} />
          </div>}


        









</> : <>

          {activeEditProfile ? (
            <>
            <div className="nav1mobile">
 <NavbarM1/>
</div>

<div className="profileBody">
            <p className="bodyHeaddd">
              <img  src="arrow-left.png" alt="" />
              <img onClick={handleBack} src="backIcon.png" alt="" />
              My Profile
            </p>
            <div className="body_profile">
              <div className="profileHead">
                <div>
                  <img src="profilePic.png" alt="" />
                  <p>{userData.name}</p>
                </div>
                <div onClick={handleEditBtn} className="editBtn">
                  Edit
                </div>
              </div>
              <div className="profileData">
                <div className="name_gender">
                  <div className="fname">
                    <p>Full Name</p>
                    <p>{userData.name}</p>
                  </div>
                  <div className="gender">
                    <p>Gender</p>
                    <p>Male</p>
                  </div>
                </div>
                <div className="email_country">
                  <div className="emailAdd">
                    <p>Email Address</p>
                    <p>{userData.email}</p>
                  </div>
                  <div className="country">
                    <p>Country</p>
                    <p>India</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="paymentMethod">
              <p>Saved Payment Methods</p>
              <div className="PaymentCards">

              {cardData.map((card)=>(
                  <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>{card.number}</p>
                    <p>{card.name}</p>
                  </div>
                  <img  src="edit-3.png" alt="" />
                </div>
                ))}


                {/* <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>xxxx xxxx xxxx 1234</p>
                    <p>Mike Ross</p>
                  </div>
                  <img src="edit-3.png" alt="" />
                </div>
                <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>xxxx xxxx xxxx 1234</p>
                    <p>Mike Ross</p>
                  </div>
                  <img src="edit-3.png" alt="" />
                </div> */}



                <div className="addCardBtn">
                  <img src="btnImg3.png" alt="" />

                  <p>Add New Card</p>
                </div>
              </div>
            </div>
          </div>

          <div className="footerHomeOPPPH">
 <Footer/>
</div>
            
            </>
        ) : (
          <div className="profileEdit">
            <ProfileEditPg handleRender={handleRender}  setActiveEditProfile={setActiveEditProfile} />
          </div>
        )}












</>}
  </>
  );
}

export default Profile;
