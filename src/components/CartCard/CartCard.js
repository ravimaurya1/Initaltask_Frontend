import React, { useEffect } from "react";
import "./CartCard.css";
import { useQuery, gql } from "@apollo/client";

const PROD_INFO = gql`
  query prod_info($id: ID!) {
    info(id: $id) {
      title
      price
      availability
      offerPrice
      name
      imageLinks
    }
  }
`;

const CartCard = (props) => {
  const { loading, error, data } = useQuery(PROD_INFO, {
    variables: { id: props.pid },
  });

  useEffect(() => {
    if(data){
    props.setTotal((total) => total + data.info.offerPrice);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  const {
    name,
    offerPrice,
    price,
    title,
    availability,
    imageLinks,
  } = data.info;

  return (
    <div className="CartCard">
      <div className="Img">
        <img src={imageLinks[0]} />
      </div>
      <div className="Product name">
        <h3>{name}</h3>
      </div>
      <div className="Price">
        <h3>Rs. {offerPrice}</h3>
        <h4>Original Rs. {price}</h4>
      </div>
    </div>
  );
};

export default CartCard;
