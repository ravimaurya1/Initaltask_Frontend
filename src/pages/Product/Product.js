import React, { useState, useEffect } from "react";
import { gql } from "@apollo/client";
import Productinfo from "../../components/Product_Info/Productinfo";
import Magnifier from '../../components/Magnifier/Magnifier';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import "./Product.css";
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import {Link, useParams} from 'react-router-dom';

const Product = () => {
  const [pid, setPid] = useState(284074);
  
  let {id} = useParams();

  useEffect(() =>{
    if(id){
    setPid(id);
    }
  },[id]);

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
