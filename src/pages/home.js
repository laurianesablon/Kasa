import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route , Navigate} from "react-router-dom";
import Housing from "./housing";
import Layout from "./layout";
import Cards from "../components/cards";
import data from "../data.js"

const cardItems = [];
let url_id = "";

for (let i = 0; i < 20; i++) {
  const cardImage = {
    backgroundImage: `url(${data.data[i].cover})`,
  };
  const cardTitle = data.data[i].title;
  const cardID = data.data[i].id;

  cardItems.push({
    cardImage,
    cardTitle,
    cardID,
  });
}



export default function Home() {
  return (
    <Layout>
      <div className="discoveryCard">
        <p>Chez vous, partout et ailleurs</p>
      </div>

      <div className="cards">
        {cardItems.map((card, i) => (
          <Cards
            key={i}
            cardImage={card.cardImage}
            cardTitle={card.cardTitle}
            cardID={card.cardID}
          />
        ))}
      </div>
    </Layout>
  );
}
