import React, { useState ,useEffect} from "react";
import "./Cart.css";
import CartCard from '../../components/CartCard/CartCard';
import { Link } from "react-router-dom";
import GetSessionId from '../../helper/getSessionId';
import { useQuery, gql, NetworkStatus} from "@apollo/client";
import {useHistory} from 'react-router-dom';
import emptycart from '../../assets/img/Emptycart.png';

let CART_INFO = gql`
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
  
  let history = useHistory();

  const { loading, error, data, refetch, networkStatus} = useQuery(CART_INFO, {
    variables: { sessionId: sessionId},
    notifyOnNetworkStatusChange: true,

  });

  useEffect(() =>{
    refetch();
  },[history]);

  if(networkStatus === NetworkStatus.refetch) return <div>Refetching</div>;
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const {getcart} = data;

  if(getcart.length === 0){
    return (
      <div className = "CartEmpty">
        <h2>Your Cart is Empty</h2>
        <img src = {emptycart}/>
        <Link to="/">
            <button className="ContinueShopping">CONTINUE SHOPPING</button>
          </Link>
      </div>
    );
  }

  return (
    <div className="Cart">
      <div className="CartHeader">
        <h2>Order Summary</h2>
        <h3>Prompt Delivery | 100% Payment Protection | Hassle-free Returns</h3>
      </div>
      <div className="CartInfo">
        <div className="AllCart">
          {getcart.map((product,index) =>{
            return (
              <CartCard key={index} pid = {product.id} setTotal = {setTotal}/>
            );
          } )}
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
