import React from "react";
import "./Footer.css";
import facebook from "../../assets/icon/facebook.svg";
import email from "../../assets/icon/email.svg";
import twitter from "../../assets/icon/twitter.svg";
import wordpress from "../../assets/icon/wordpress.svg";
import linkedin from "../../assets/icon/linkedin.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-first">
        <div className="ZEFO">
          <h3>ZEFO</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Sell & Earn</a>
            </li>
            <li>
              <a href="#">See Our Stores</a>
            </li>
            <li>
              <a href="#">Carrers</a>
            </li>
            <li>
              <a href="#">Zefo For Business</a>
            </li>
          </ul>
        </div>
        <div className="Legal">
          <h3>LEGAL</h3>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Consignment Policy</a>
            </li>
          </ul>
        </div>
        <div className="Support">
          <h3>SUPPORT</h3>
          <ul>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Buy-vs-Rent</a>
            </li>
            <li>
              <a href="#">How Zefo Works</a>
            </li>
          </ul>
        </div>
        <div className="Email">
          <h3>SUBSCRIBE TO OUR NEW ARRIVALS</h3>
          <div className="email_button">
            <input type="email" placeholder="Enter Email to get notified" />
            <button className="get_them">
              <b>GET THEM</b>
            </button>
          </div>
        </div>
      </div>
      <hr />
      <div className="Footer-second">
        <h3 className="head">EMAIL US AT CONTACT@GOZEFO.COM</h3>
        <div className="second">
          <h3>OR CONNECT WITH US ON</h3>
          <div className="icons">
            <a href="#">
              <img src={email} alt="email" />
            </a>
            <a href="#">
              <img src={facebook} alt="facebook" />
            </a>
            <a href="#">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedin} alt="linkedin" />
            </a>
            <a href="#">
              <img src={wordpress} alt="wordpress" />
            </a>
          </div>
        </div>
      </div>
      <hr />
      <div className="Footer-third">
        <div className="First">
          <h3>Popular Categories on Zefo</h3>
          <div className="Link">
            <a href="#">Sofas</a>
            <span>|</span>
            <a href="#">Beds</a>
            <span>|</span>
            <a href="#">Dining Tables</a>
            <span>|</span>
            <a href="#">Tables</a>
            <span>|</span>
            <a href="#">Chair</a>
            <span>|</span>
            <a href="#">Storage</a>
            <span>|</span>
            <a href="#">Office</a>
            <span>|</span>
            <a href="#">TVs</a>
            <span>|</span>
            <a href="#">Washing Machines</a>
            <span>|</span>
            <a href="#">ACs</a>
          </div>
        </div>
        <div className="second">
          <h3>Popular Subcategories on Zefo</h3>
          <div className="Link">
            <div>
              <a href="#">One Seater Sofas</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Two Seater Sofas</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Three Seater Sofas</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Sofa Sets</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Single Beds</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Queen Beds</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">King Beds</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Diwans</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">4 seater Dining Table Set</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">6 seater Dining Table Sets</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Dining Tables</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Coffe Tables</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Console Tables</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Lounge Chairs</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Recliners</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">TV units</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Wardrobes</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Bookshelves</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Cabinets</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Shoe racks</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Office Chairs</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Office Tables</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">LED TVs</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Single Door Refrigerators</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Double Door Refrigerators</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Fully Automatic Washing Machine</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Semi Automatic Washing Machines</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Top Load Washing Machines</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Front Load Washing Machines</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Window ACs</a>
              <span>|</span>
            </div>
            <div>
              <a href="#">Split ACs</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
