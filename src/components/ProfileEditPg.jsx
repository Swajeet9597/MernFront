import React from 'react'
import "./ProfileEditPg.css"

const ProfileEditPg = ({setActiveEditProfile}) => {
    function handleA(){
        setActiveEditProfile(true)
    }
  return (
    <>
     <div className="editProfileBody">
          <p className="bodyHead">
            <img onClick={handleA} src="arrow-left.png" alt="" /> 
            <img src="backIcon.png" alt="" />
             My Profile
          </p>
          <div className="body_profile">
            <div className="profileHead">
              <div>
                <img src="profilePic.png" alt="" />
                <p>Mike Ross</p>
              </div>
              <div className="editBtn">Save</div>
            </div>
            <div className="profileData">
              <div className="name_gender">
                <div className="fname">
                  <p>Full Name</p>
                  <input type="text" />
                </div>
                <div className="gender">
                  <p>Gender</p>
                  <input type="text" />
                </div>
              </div>
              <div className="email_country">
                <div className="emailAdd">
                  <p>Email Address</p>
                  <input type="text" />
                </div>
                <div className="country">
                  <p>Country</p>
                  <input type="text" />
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
    
    </>
  )
}

export default ProfileEditPg