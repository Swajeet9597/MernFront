import React from 'react';
import './RestoName.css'
import {useNavigate} from 'react-router-dom'
const RestoName = () => {
  const navigate = useNavigate();
  function handleOnclick (){
     navigate("/Product")
  }


  return (
    <div className='restonamess' >
      <div onClick={handleOnclick} className="restonamessbox">
        <img src="McDonald.png" alt="" />
      </div>


      <div onClick={handleOnclick} className="restonamessbox">
        <img src="papahohns.png" alt="" />
      </div>
      <div onClick={handleOnclick} className="restonamessbox">
        <img src="kfc.png" alt="" />
      </div>
      <div onClick={handleOnclick} className="restonamessbox">
        <img src="texas.png" alt="" />
      </div>
      <div onClick={handleOnclick} className="restonamessbox">
        <img src="Group20.png" alt="" />
      </div>
      <div onClick={handleOnclick} className="restonamessbox">
        <img src="Group21.png" alt="" />
      </div>


    </div>
  );
}

export default RestoName;
