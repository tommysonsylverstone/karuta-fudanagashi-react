import React from "react";
import cardsArray from "../datas/CardsArray";
import Card from "./Card";

const Cards = () => {
  return (
    <>
      {cardsArray.map((cardData, i) => (
        <Card key={i} data={cardData} />
      ))}
    </>
  );
};

export default Cards;
