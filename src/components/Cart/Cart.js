import React, { useState } from "react";
import "./Cart.css";
import CartCard from "../CartCard/CartCard";
import { Link } from "react-router-dom";
import GetSessionId from '../../helper/getSessionId';
import { useQuery, gql} from "@apollo/client";

const CART_INFO = gql`
  query cart_info($sessionId: ID!){
    getcart(sessionId: $sessionId){
      id
      quantity
    }
  }
`;

// const ravi = gql`
//   query ravi($id: ID!){
//     yes(id: $id)
//   }
// `;

const Cart = () => {
  // const {loading, error ,data} = useQuery(ravi,{
  //   variables:{id: 123},
  // });
  const [total, setTotal] = useState(0);
  const sessionId = GetSessionId();

  const { loading, error, data } = useQuery(CART_INFO, {
    variables: { sessionId: "c795a44e-0652-407b-acb9-9547169d7e6e"},
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <div className="Cart">
      {console.log(data)}
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
