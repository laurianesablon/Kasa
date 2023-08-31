import React from "react";
import { Link } from "react-router-dom";

export default function Cards({ cardImage, cardTitle, cardID }) {
  return (
    <Link
      className={`card ${cardID}`}
      style={cardImage}
      to={`/housing/${cardID}`}
    >
      <h2 className="card_title">{cardTitle}</h2>
    </Link>
  );
}
