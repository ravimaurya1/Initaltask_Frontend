import React, { useState } from "react";
import "./Cart.css";
import CartCard from "../CartCard/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const [total, setTotal] = useState(0);
  return (
    <div className="Cart">
      <div className="CartHeader">
        <h2>Order Summary</h2>
        <h3>Prompt Delivery | 100% Payment Protection | Hassle-free Returns</h3>
      </div>
      <div className="CartInfo">
        <div className="AllCart">
          <CartCard pid={401949} setTotal={setTotal} />
          <CartCard pid={401949} setTotal={setTotal} />
        </div>
        <div className="Total">
          <h3>Price Details</h3>
          <hr />
          <p>Total amount Rs. {total}</p>
        </div>
      </div>
      {total > 0 ? (
        <div className="Checkout">
          <hr />
          <Link to="/">
            <button className="ContinueShopping">CONTINUE SHOPPING</button>
          </Link>
          <button className="CheckoutButton">PROCCED TO NEXT STEP</button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default Cart;
