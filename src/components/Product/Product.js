import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import Productinfo from "../Product_Info/Productinfo";
import Magnifier from "../Magnifier/Magnifier";
import SimilarProducts from "../SimilarProducts/SimilarProducts";
import "./Product.css";
import ProductDetails from "../ProductDetails/ProductDetails";

const Product = () => {
  const [pid, setPid] = useState(284074);
  return (
    <div className="Product">
      <div className="ProductInfo">
        <div className="ProductImage">
          <Magnifier pid={pid} />
        </div>
        <div className="Info">
          <Productinfo pid={pid} />
        </div>
      </div>
      <div className="ProductDetails">
        <ProductDetails pid={pid} />
      </div>
      <div className="SimilarProducts">
        <h2>Similar Products</h2>
        <SimilarProducts pid={pid} setPid={setPid} />
      </div>
    </div>
  );
};

export default Product;
