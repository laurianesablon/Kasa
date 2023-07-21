import React from "react";

export default function Cards({cardImage, cardTitle}) {
  return (
    <div className="card" style={cardImage}>
      <h2 className="card_title">{cardTitle}</h2>
    </div>
  );
}


 
//TODO : Rendre l'élement plus agnostique