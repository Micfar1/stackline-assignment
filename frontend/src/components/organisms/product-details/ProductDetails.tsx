import React from "react";
import { iStacklineData } from "../../../models/StacklineDataModel";
import { DivProductDetailsContainer } from "./styles";

interface iProductDetailsProps {
  data: iStacklineData;
}

const ProductDetails = ({ data }: iProductDetailsProps) => {
  return (
    <DivProductDetailsContainer>
      <img width="160px" src={data.image} alt={data.subtitle} />
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <ul>
        {data.tags.map((text, index) => {
          return <li key={index}>{text}</li>;
        })}
      </ul>
    </DivProductDetailsContainer>
  );
};

export default ProductDetails;
