import React from 'react';
import './HomeSearchM.css'
const HomeSearchM = () => {
  return (
    <div className='HomeSearchMBox' >
      <span className='rest' >Order Restaurant food, takeaway and groceries.</span>
      <div className="headm">

      <p className='feast' >Feast Your Senses,</p>
        <p className='fast' >Fast and Fresh</p>
      </div>
      <span className='postcode' >Enter a postcode to see what we deliver</span>

        <div className="searchM">
            <input className='searchMIN' type="text" />
            <div className="sidearrow">
                <img src="Nextpage.png"  />
            </div>
        </div>

    </div>
  );
}

export default HomeSearchM;
