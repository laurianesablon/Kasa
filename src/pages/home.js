import React from "react";
import Layout from "./layout";
import Cards from "../components/cards";
import data from "../data.js"


const cardItems = [];

for (let i = 0; i < 20; i++) {
  const cardImage = {
    backgroundImage: `url(${data.data[i].cover})`,
  };
  const cardTitle = data.data[i].title;

  cardItems.push({
    cardImage,
    cardTitle,
  });
}

export default function Home() {
  return (
    <Layout>
      <div className="discoveryCard">
        <p>Chez vous, partout et ailleurs</p>
      </div>
  
      <div className="cards"> {/* Add a container div with className="cards" */}
        {cardItems.map((card, i) => (
          <Cards
            key={i}   
            cardImage={card.cardImage}
            cardTitle={card.cardTitle}
          />
        ))}
      </div> {/* Close the container div */}
    </Layout>
  );
  
}
