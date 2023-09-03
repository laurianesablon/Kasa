import React from "react";
import Layout from "./layout";
import Carrousel from "../components/carrousel";
import data from "../data";
import Collapse from "../components/collapse";
import Tag from "../components/tag";
import Stars from "../components/stars";
import { useParams } from "react-router-dom";


export default function Housing() {
  let { id } = useParams();
  const housing = data.data.find((item) => item.id === id);
  const { title, location, description, equipments, rating, tags, host } = housing;
  const renderedTags = tags.map((tag, index) => <Tag key={index} tag={tag} />);
  return (
    <Layout>
      <div>
        <Carrousel data={housing} />
        <div className="housing_info_container">
          <div className="title_tags_container">
            <h1 className="housing_title">{title}</h1>
            <p>{location}</p>
            <div className="tags">{renderedTags}</div>
          </div>
          <div className="rate_host_container">
            <div className="host">
              <p className="host_name">{host.name}</p>
              <img src={host.picture} className="host_picture" alt="host" />
            </div>
            <Stars rating={rating} />
          </div>
        </div>
        <div className="housing_collapse">
          <Collapse collapse_title="Description" collapse_content={description} />
          <Collapse collapse_title="Equipements" collapse_content={equipments} />
        </div>
      </div>
    </Layout>
  );
}