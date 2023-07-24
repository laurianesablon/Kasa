import React, { useEffect, useState, useMemo, useCallback } from "react";
import Layout from "./layout";
import Carrousel from "../components/carrousel";
import data from "../data";
import Collapse from "../components/collapse";
import Tag from "../components/tag";
import Stars from "../components/stars";

const title = data.data[0].title;
const location = data.data[0].location;
const description = data.data[0].description;
const equipments = data.data[0].equipments;
let rating = data.data[0].rating;

const tags = data.data[0].tags.map((tag, index) => (
  <Tag key={index} tag={tag} />
));

console.log(data.data[0]);
export default function Housing() {
  return (
    <Layout>
      <div>
        <Carrousel data={data} />
        <h1 className="housing_title">{title}</h1>
        <p>{location}</p>
        <div className="tags_and_stars">
          <div className="tags">{tags}</div>
          <Stars rating={rating} />
        </div>
        <div className="housing_collapse">
          <Collapse CollapseTitle="Description" CollapseContent={description} />
          <Collapse CollapseTitle="Equipements" CollapseContent={equipments} />
        </div>
      </div>
    </Layout>
  );
}
