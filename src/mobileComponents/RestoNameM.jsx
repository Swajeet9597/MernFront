import React from 'react';
import './RestoNameM.css'
import {useNavigate} from 'react-router-dom'
const RestoNameM = () => {
 
  const navigate = useNavigate();
  function handleOnclick (){
     navigate("/Product")
  }
  return (
    <div className='restonamessM' >
      <div className="restonamessboxM">
        <img onClick={handleOnclick}  src="McDonald.png" alt="" />
      </div>


      <div className="restonamessboxM">
        <img onClick={handleOnclick}  src="papahohns.png" alt="" />
      </div>
      <div className="restonamessboxM">
        <img onClick={handleOnclick}  src="kfc.png" alt="" />
      </div>
      <div className="restonamessboxM">
        <img onClick={handleOnclick}  src="texas.png" alt="" />
      </div>
      <div className="restonamessboxM">
        <img onClick={handleOnclick}  src="Group20.png" alt="" />
      </div>




      <div className="restonamessboxM">
        <img onClick={handleOnclick}  src="Group21.png" alt="" />
      </div>
      {/* <div className="restonamessboxM">
        <img src="McDonald.png" alt="" />
      </div>
      <div className="restonamessboxM">
        <img src="McDonald.png" alt="" />
      </div> */}

     

    </div>
  );
}

export default RestoNameM;
