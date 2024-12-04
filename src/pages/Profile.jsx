
import './Profile.css'
import { useNavigate } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import NavBar from '../components/NavBar';
import NavBarOrder from '../components/NavBarOrder';
import Footer from '../components/Footer';
import PaymentC from '../components/PaymentC';
import NavbarM1 from '../mobileComponents/NavbarM1';


const Profile = () => {

    const [activeEditProfile, setActiveEditProfile] = useState(true);

    const navigate = useNavigate()

const handleBack=()=>{
    navigate('/home')
}


    const handleEditBtn = () => {
      setActiveEditProfile(false);
      // console.log("active");
    };
  

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



  return (
  <>
  {screeSize.width > 768 ? <>

<div className="nav">
 <NavBar/>
</div>
<div className="nav2">
 <NavBarOrder/>
</div>


        {activeEditProfile ? (
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
                  <p>Mike Ross</p>
                </div>
                <div onClick={handleEditBtn} className="editBtn">
                  Edit
                </div>
              </div>
              <div className="profileData">
                <div className="name_gender">
                  <div className="fname">
                    <p>Full Name</p>
                    <p>mike ross</p>
                  </div>
                  <div className="gender">
                    <p>Gender</p>
                    <p>Male</p>
                  </div>
                </div>
                <div className="email_country">
                  <div className="emailAdd">
                    <p>Email Address</p>
                    <p>mikeross@gmail.com</p>
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
                <div className="paymentCard">
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
                </div>
                <div className="paymentCard">
                  <img src="cardPic.png" alt="" />
                  <div className="cardDetails">
                    <p>xxxx xxxx xxxx 1234</p>
                    <p>Mike Ross</p>
                  </div>
                  <img src="edit-3.png" alt="" />
                </div>
                <div className="addCardBtn">
                  <img src="btnImg3.png" alt="" />

                  <p>Add New Card</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="profileEdit">
            <ProfileEditPg setActiveEditProfile={setActiveEditProfile} />
          </div>
        )}









<div className="footerHomeOPPP">
 <Footer/>
</div>



</> : <>

<div className="nav1mobile">
 <NavbarM1/>
</div>





</>}
  </>
  );
}

export default Profile;
