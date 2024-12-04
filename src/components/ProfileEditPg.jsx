import React, { useEffect, useState } from 'react'
import "./ProfileEditPg.css"
import { BASE_URL } from '../services/helper';

const ProfileEditPg = ({setActiveEditProfile}) => {
    function handleA(){
        setActiveEditProfile(true)
    }

    const [userData, setuserData] = useState([])
    const [editData,setEditData] = useState({
      name:userData.name,
      email:userData.email
    })
 
    function handleInput(e){
      let name = e.target.name;
      let value = e.target.value;

      setEditData({
        ...editData,
        [name]:value
      })
    }

    async function handleSave (){
         const response = await fetch(`${BASE_URL}/api/auth/useredit`,{
          method:"PUT",
          headers:{
            "Content-Type":"application/json"
          },
          body: JSON.stringify(editData)
         })
    }
    

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
    useEffect(()=>{
      getUserData()
    },[])
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
                <p>{userData.name}</p>
              </div>
              <div onClick={handleSave} className="editBtn">Save</div>
            </div>
            <div className="profileData">
              <div className="name_gender">
                <div className="fname">
                  <p>Full Name</p>
                  <input  onChange={handleInput} name='name' type="text" placeholder={userData.name}/>
                </div>
                <div className="gender">
                  <p>Gender</p>
                  <input type="text" value="Male" />
                </div>
              </div>
              <div className="email_country">
                <div className="emailAdd">
                  <p>Email Address</p>
                  <input onChange={handleInput} name='email' type="text" placeholder={userData.email} />
                </div>
                <div className="country">
                  <p>Country</p>
                  <input type="text" value="India" />
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