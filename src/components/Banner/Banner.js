import React from "react";
import "./banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="first">
        <p>
          See our products you buy! Visit Zefo offline store in Whitefield:
          <a href="#">
            <b>Visit Store ></b>
          </a>
        </p>
      </div>
      <div className="second">
        <li>
          <ul>
            <a href="#">How Zefo Works | </a>
          </ul>
          <ul>
            <a href="#">Zefo For Business | </a>
          </ul>
          <ul>
            <a href="#">Visit Store | </a>
          </ul>
          <ul>
            <a href="#">Banglore | </a>
          </ul>
        </li>
      </div>
    </div>
  );
};

export default Banner;
