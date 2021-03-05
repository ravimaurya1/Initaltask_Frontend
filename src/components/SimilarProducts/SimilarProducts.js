import React from "react";
import { useQuery, gql } from "@apollo/client";
import ProductCard from "../ProductCard/ProductCard";
import "./SimilarProducts.css";

const SIMILAR_PROD = gql`
  query similar_prod($id: ID!) {
    similarProduct(id: $id) {
      id
      condition
      name
      price
      offerPrice
      imagelink
    }
  }
`;

const SimilarProducts = (props) => {
  const { loading, error, data } = useQuery(SIMILAR_PROD, {
    variables: { id: props.pid },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <div className="ProductsList">
      {data.similarProduct.map((data, index) => {
        return (
          <ProductCard
            setPid={props.setPid}
            key={index}
            name={data.name}
            condition={data.condition}
            id={data.id}
            imagelink={data.imagelink}
            offerPrice={data.offerPrice}
            price={data.price}
          />
        );
      })}
    </div>
  );
};

export default SimilarProducts;
