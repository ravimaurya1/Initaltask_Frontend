import React, { useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import "./Productinfo.css";
import bazar from "../../assets/img/quikrbazaar.png";
import { Helmet } from "react-helmet";
import GetSessionId from '../../helper/getSessionId';
import {useHistory} from 'react-router-dom';
import calendar from '../../assets/img/calendar.png';
import card from '../../assets/img/Card.png';

const PROD_INFO = gql`
  query prod_info($id: ID!) {
    info(id: $id) {
      title
      condition
      price
      availability
      offerPrice
      name
      metaInfo {
        title
        description
      }
      startingEmi
      paymentModeAvailableText
      SeatingHeight
      subCategoryType
      details{
        Dimension
        Color
      }

    }
  }
`;

const ADD_CART = gql`
  mutation add_cart($sessionId: ID!, $productId: ID!){
    addToCart(sessionId: $sessionId, productId: $productId)
  }
`;

const Productinfo = (props) => {
  const sessionId = GetSessionId();
  const { loading, error, data } = useQuery(PROD_INFO, {
    variables: { id: props.pid },
  });
  // Mutation Hooks from Apollo Client
  const [add_to_cart,{data:data_mutaion}] = useMutation(ADD_CART);

  let history = useHistory();

  // Buy Now Button to add in Cart
  const addToCart = () => {
    add_to_cart({variables:{sessionId: sessionId, productId:props.pid}});
    history.push('/cart');
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const { name, condition, offerPrice, price, title, availability, startingEmi, paymentModeAvailableText,SeatingHeight,subCategoryType } = data.info;
  const metaInfo = data.info.metaInfo;

  // console.log("metaInfo", metaInfo);
  return (
    <div className="Productinfo">
      <Helmet>
        <title>{name}</title>
        <meta name="description" content={metaInfo.description} />
      </Helmet>
      <div className="header">
        <h2>{name}</h2>
        <h3>Condition. {condition}</h3>
        <hr />
      </div>
      {availability ? (
        <div>
          
          <div className="BuyNow">
            <h2>Rs. {offerPrice}</h2>
            <h4>Est original Rs.{price}</h4>
            <div className="emi">
              <img src={calendar}/>
            <p>EMI from Rs. {startingEmi}</p>
          </div>
            <button className="BuyNowButton" onClick = {() => addToCart(props.pid)}>BUY NOW</button>
          </div>
          <div className="Payment">
            <img src={card}/>
            <p>{paymentModeAvailableText}</p>
          </div>
          <hr />
          
          <div className="offer">
            <h2>Offer</h2>
            <hr />
          </div>
         
          <div className="ZefoAssessment">
            <h3>ZEFO ASSESSMENT</h3>
            <p>
              This is a flawless product with no defects. To know more about
              Zefo product conditon<a href="#">Click Here</a>
            </p>
          </div>
          <div
            className="ZefoExperienceZone"
            style={{ backgroundImage: `url(${bazar})` }}
          >
            <h2>ZEFO Experience Zone</h2>
            <p>See this Product before you buy!</p>
            <form>
              <select name="cars" id="cars" className="select">
                <option value="">Select Store Location</option>
                <option value="Banglore">Banglore</option>
                <option value="Delhi">Delhi</option>
                <option value="Hyderbad">Hyderbad</option>
              </select>
              <input type="text" placeholder="Name" className="name" />
              <input type="number" placeholder="Phone" className="phone" />
              <button type="submit" className="schedule">
                SCHEDULE NOW
              </button>
            </form>
          </div>
          <div className="ProductDetailSection">
            <h3>Key Features</h3>
            <p>Condition: {condition}</p>
            <p>Seating Height: {SeatingHeight}</p>
            <p>Sub Category Type: {subCategoryType}</p>
            <p></p>
          </div>
        </div>
      ) : (
        <div>
          <h1>Product Not Available</h1>
        </div>
      )}
    </div>
  );
};

export default Productinfo;
