import React from "react";
import './RespoCustomerReview.css'

const RespoCustomerReview = () => {
  return (
    <>
      <div className="respoReview">
        <h1>Customer Reviews</h1>
        <div className="cardWrapper">
          <div className="Respo_Card">
            <div className="Respo_cardHead">
              <div className="Respo_profileLeft">
                <div className="Respo_ProfileImg">
                  <img src="Ellipse3.png" alt="" />
                </div>
                <div className="Respo_ProfileInfo">
                  <p>St Glx</p>
                  <p>South London</p>
                </div>
              </div>
              <div className="Respo_profileRight">
                <div className="Respo_str_date">
                  <img src="Group52.png" alt="" />
                </div>
                <div className="Respo_clock">
                  {/* <img src="TimeSpan.png" alt="" /> */}
                  <p>24th September, 2023</p>
                </div>
              </div>
            </div>
            <div className="Respo_cardBody">
              <p>
                The positive aspect was undoubtedly the efficiency of the
                service. The queue moved quickly, the staff was friendly, and
                the food was up to the usual McDonald's standard – hot and
                satisfying.
              </p>
            </div>
          </div>

          {/* <div className="Respo_Card">
            <div className="Respo_cardHead">
              <div className="Respo_profileLeft">
                <div className="Respo_ProfileImg">
                  <img src="profileImg.png" alt="" />
                </div>
                <div className="Respo_ProfileInfo">
                  <p>St Glx</p>
                  <p>South London</p>
                </div>
              </div>
              <div className="Respo_profileRight">
                <div className="Respo_str_date">
                  <img src="starImg.png" alt="" />
                </div>
                <div className="Respo_clock">
                  <img src="clkImg.png" alt="" />
                  <p>24th September, 2023</p>
                </div>
              </div>
            </div>
            <div className="Respo_cardBody">
              <p>
                The positive aspect was undoubtedly the efficiency of the
                service. The queue moved quickly, the staff was friendly, and
                the food was up to the usual McDonald's standard – hot and
                satisfying.
              </p>
            </div>
          </div> */}
          
        </div>
        <div className="nxtBtns">
            <img src="Group57.png" alt="" />
            <img src="Group58.png" alt="" />
        </div>


         <div className="ratingimg">
            <img src="Rectangle62.png" alt="" />
         </div>

      </div>
    </>
  );
};

export default RespoCustomerReview;