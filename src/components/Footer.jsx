import React from "react";
import "./Footer.css";
import footlogo from "../assets/footlogo4.png";
import appstore from "../assets/appstore.png";
import insta from "../assets/instagram.png";
import facebook from "../assets/Facebook.png";
import snap from "../assets/Snapchat.png";
import tiktok from "../assets/TikTok.png";

const Footer = () => {
  return (
    <div className="footcon">
      <div className="foot1">
        <div className="f11">
          <img className="footlogo" src={footlogo} alt="" />
          <img className="appstore" src={appstore} />
          <div className="company">
            <span>Company # 490039-445, Registered with </span>
            <span className="house"> House of companies. </span>
          </div>
        </div>
        <div className="f12">
          <h2>Get Exclusive Deals in your Inbox</h2>
          <div className="sub">
            <div className="rect1">youremail@gmail.com</div>
            <div className="rect2">Subscribe</div>
          </div>
          <span>we wont spam, read our email policy</span>
          <div className="logoes">
            <img className="social" src={facebook} alt="" />
            <img className="social" src={insta} alt="" />
            <img className="social" src={tiktok} alt="" />
            <img className="social" src={snap} alt="" />
          </div>
        </div>
        <div className="f13">
          <div className="terms1">
            <h2>Legal Pages</h2>
            <span>Terms and conditions</span>
            <span>Privacy</span>
            <span>Cookies</span>
            <span>Modern Slavery Statement</span>
          </div>
          <div className="terms2">
            <h2>Important Links</h2>
            <span>Get help</span>
            <span>Add your restaurant</span>
            <span>Sign up to deliver</span>
            <span>Create a business account</span>
          </div>
        </div>
      </div>
      <div className="foot2">
        <div className="foot2box">
          <div className="f">
            <span>Order.uk Copyright 2024, All Rights Reserved.</span>
          </div>
          <div className="f1">
            <span>Privacy Policy</span>
            <span>Terms</span>
            <span>Pricing</span>
            <span>Do not sell or share my personal information</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
