import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  name,
  price,
  offerPrice,
  id,
  imagelink,
  condition,
  setPid,
}) => {
  const imageClick = (pid) => {
    setPid(pid);
  };
  return (
    <div className="Card" onClick={() => imageClick(parseInt(id))}>
      <div className="image">
        <img src={imagelink} alt="product_image" />
      </div>
      <div className="title">
        <h3>{name}</h3>
        <h4>{condition}</h4>
      </div>
      <hr />
      <div className="price">
        <h3>Rs.{offerPrice}</h3>
        <h4>Original Price. {price}</h4>
      </div>
    </div>
  );
};

export default ProductCard;
