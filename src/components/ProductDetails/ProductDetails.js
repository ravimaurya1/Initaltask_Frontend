import React,{useState} from "react";
import "./ProductDetails.css";
import { useQuery, gql } from "@apollo/client";

const QUEST = gql`
  query quest($id: ID!) {
    info(id: $id) {
      question_ans {
        heading
        description
      }
      headingAndDescription {
        heading
        description
      }
      details{
        Dimension
        Color
        Material
        Frame
        Storage
        SoftnessImage
        SoftnessText
        DimensionImage
      }
      quality
      delivery
      return
      pricing
    }
  }
`;

const ProductDetails = (props) => {
  const { loading, error, data } = useQuery(QUEST, {
    variables: { id: props.pid },
  });

  //Selected Button
  const [selectedButton, setSelectedButton] = useState(0);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  const question = data.info.question_ans;
  const warratny = data.info.headingAndDescription;

  const {Dimension, Color, Material, Frame, Storage, SoftnessImage, SoftnessText, DimensionImage} = data.info.details;
  
  
  const DetailsComponent = () =>{
    return(
    <div className = "DetailsSection">
      <div className = "DimensionImage">
        <img src = {DimensionImage} />
      </div>
      <div className="info">
        <p>Dimension:-{Dimension}</p>
        <p>Color: {Color}</p>
        <p>Material: {Material}</p>
        <p>Frame: {Frame}</p>
        <p>Sotrage: {Storage}</p>
        <div className ="Softness">
          <img src={SoftnessImage}/>
          <p>{SoftnessText}</p>
        </div>
      </div>
    </div>)
  }

  const QualityComponent = () =>{
    return (
      <div>{data.info.quality}</div>
    );
  }

  const DeliveryComponent = () =>{
    return (
      <div>{data.info.delivery}</div>
    );
  }

  const ReturnsComponent = () =>{
    return (
      <div>{data.info.return}</div>
    );
  }

  const PricingComponet = () =>{
    return (
      <div>{data.info.pricing}</div>
    );
  }

  let ComponentArray = [DetailsComponent, QualityComponent, DeliveryComponent, ReturnsComponent, PricingComponet];

  return (
    <div className="Details">
      <div className="DetailsDiv">
        <div className="buttons">
          <button className={selectedButton == 0? 'WhiteBackground':''} onClick={() => setSelectedButton(0)}>Details</button>
          <button className={selectedButton == 1? 'WhiteBackground':''} onClick={() => setSelectedButton(1)}>Quality</button>
          <button className={selectedButton == 2? 'WhiteBackground':''} onClick={() => setSelectedButton(2)}>Delivery</button>
          <button className={selectedButton == 3? 'WhiteBackground':''} onClick={() => setSelectedButton(3)}>Returns</button>
          <button className={selectedButton == 4? 'WhiteBackground':''} onClick={() => setSelectedButton(4)}>Pricing</button>
        </div>
        <div className="mainSection">
          {ComponentArray[selectedButton]()}
        </div>
      </div>
      <hr />
      <div className="question">
        <div className="question1">
          <h3>{warratny[0].heading}</h3>
          <p>{warratny[0].description}</p>
        </div>
        <div className="question2">
          <h3>{warratny[1].heading}</h3>
          <p>{warratny[1].description}</p>
        </div>
        <hr />
        <div className="question">
          <h2>QUESTIONS ABOUT THIS PRODUCT</h2>
          <div className="question1">
            <h3>{question[0].heading}</h3>
            <p>{question[0].description}</p>
          </div>
          <div className="question2">
            <h3>{question[1].heading}</h3>
            <p>{question[1].description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
