import React from "react";
import Layout from "./layout";
import data from "../data";

//console.log(data.data[0].pictures[0]);
function Carrousel() {
  let slides = [data.data[0].pictures.map((picture) => picture)];
  //console.log(slides);
  return (
    <div className="carrousel">
      <img className="carrousel_img" src={slides[0][1]}/>
      <img alt="hey" src="./IMG.jpg" />
    </div>
  );
}
export default function Housing() {
  return (
    <Layout>
      <div>
        <Carrousel />
      </div>
    </Layout>
  );
}
