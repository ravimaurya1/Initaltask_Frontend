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
      <div className = "Video">
        <div>
        <h4>BEHIND THE SCENES</h4>
        <h3>FROM USED TO READY TO USE</h3>
        </div>
        <div className="youtube">
      <iframe width="727" height="400" src="https://www.youtube.com/embed/kldi4UceiGk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </div>
    </div>
  );
};

export default Product;
