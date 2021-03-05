import React from "react";
import "./LoginMenu.css";
import zefo from "../../assets/img/zefo_logo.png";
import quikr from "../../assets/img/qukir2.jpg";
import heart from "../../assets/img/heart.png";
import cart from "../../assets/img/cart.png";
import login from "../../assets/img/login.png";
import { Link } from "react-router-dom";

const LoginMenu = () => {
  return (
    <>
      <div className="loginmenu">
        <div className="SellandEarn">
          <button className="sellbutton">
            <b>SELL & EARN</b>
          </button>
        </div>
        <div className="logo">
          <img className="zefo" src={zefo} alt="zefo_logo" />
          <hr />
          <p>by</p>
          <img className="quikr" src={quikr} alt="quikr_logo" />
        </div>
        <div className="login_cart">
          <a href="#">
            <img src={heart} alt="heart" />
          </a>
          <Link to="/cart">
            <img src={cart} alt="cart" />
          </Link>
          <a href="#">
            <img src={login} alt="login" />
            <span>LOGIN</span>
          </a>
        </div>
      </div>
      <hr />
    </>
  );
};

export default LoginMenu;
