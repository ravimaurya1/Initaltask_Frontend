import React, { useState } from "react";
import ReactImageMagnify from "react-image-magnify";
import { useQuery, gql } from "@apollo/client";
import "./Magnifier.css";

const PROD_INFO = gql`
  query prod_info($id: ID!) {
    info(id: $id) {
      imageLinks
      name
    }
  }
`;

const Magnifier = (props) => {
  const { loading, error, data } = useQuery(PROD_INFO, {
    variables: { id: props.pid },
  });

  //Selected Images
  const [selectedImage, setSelectedImage] = useState(0);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  let imagelink = data.info.imageLinks[selectedImage];
  return (
    <div className="Image">
      <div className="perimeter">
        <div className="image">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: data.info.name,
                isFluidWidth: true,
                src: imagelink,
                sizes:
                  "(min-width: 800px) 33.5vw, (min-width: 415px) 50vw, 100vw",
              },
              largeImage: {
                alt: data.info.name,
                src: imagelink,
                width: 1200,
                height: 1800,
              },
              isHintEnabled: true,
            }}
          />
        </div>
      </div>
      <div className ="text">
        <h4>Product Image</h4>
      </div>
      <div className="ImageList">
        {data.info.imageLinks.map((image, index) => {
          return (
            <img
              src={image}
              key={index}
              onClick={() => setSelectedImage(index)}
              className={selectedImage === index ? "border-insert":" "}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Magnifier;
