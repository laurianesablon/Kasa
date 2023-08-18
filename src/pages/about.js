import React from "react";
import Layout from "./layout";
import Collapse from "../components/collapse";

export default function About() {
  const collapse_title = ["Fiabilité", "Respect", "Service", "Sécurité"];
  const collapse_content = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  ];

  const collapseItems = collapse_title.map((title, i) => (
    <Collapse
      key={i}
      collapse_title={title}
      collapse_content={collapse_content[i]}
    />
  ));

  return (
    <Layout>
      <div className="about_banner_img"></div>
      <div class="about_collapse">
        <div className="collapse_container">{collapseItems}</div>
      </div>
    </Layout>
  );
}
