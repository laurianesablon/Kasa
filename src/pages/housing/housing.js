import React from "react";
import Layout from "../layout";
import data from "../../data";

console.log(data.data[0].pictures[0]);
function Carrousel() {
  let images = data.data[0].pictures[0]// data.data[0].pictures.map(picture => picture);

  return (
    <div className="carrousel">
      <img src={images}></img>
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
