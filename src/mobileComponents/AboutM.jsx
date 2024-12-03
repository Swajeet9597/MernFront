import React from 'react';
import './AboutM.css'
const AboutM = () => {
  return (
    <div className='aboutMboxM' >
       <span>Know more about us!</span>

       <div className="queM">
                <span className='howM' >How does Order.UK work?</span>
                <span>What payment methods are accepted?</span>
                <span>Can I track my order in real-time?</span>
                <span>Are there any special discounts or <br /> promotions available?</span>
                <span>Is Order.UK available in my area?</span>
       </div>
        <div className="solM">
                <div className="solboxM">
                            <span>Place an Order!</span>
                            <img src="order-food1.png" alt="" />
                            <div className="solboxpM">

                            <p>Place order through our </p>
                            <p> website or Mobile app</p>
                            </div>
                </div>


                <div className="solboxM">
                            <span>Place an Order!</span>
                            <img src="order-food1.png" alt="" />
                            <div className="solboxpM">

                            <p>Place order through our </p>
                            <p> website or Mobile app</p>
                            </div>
                </div>
                <div className="solboxM">
                            <span>Place an Order!</span>
                            <img src="order-food1.png" alt="" />
                            <div className="solboxpM">

                            <p>Place order through our </p>
                            <p> website or Mobile app</p>
                            </div>
                </div>


                <div className="aboutDesc">
                    <p>Order.UK simplifies the food ordering process. Browse through our diverse menu, select your favorite dishes, and proceed to checkout. Your delicious meal will be on its way to your doorstep in no time!</p>
                </div>

        </div>
    </div>
  );
}

export default AboutM;
