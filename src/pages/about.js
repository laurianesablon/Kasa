import React from "react";
import Layout from "./layout";
import Collapse from "../components/collapse";

export default function About() {
  const CollapseTitle = ["Fiabilité", "Respect", "Service", "Sécurité"];
  const CollapseContent = [
    "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  ];

  const collapseItems = CollapseTitle.map((title, i) => (
    <Collapse key={i} CollapseTitle={title} CollapseContent={CollapseContent[i]} />

  ));

  return (
    <Layout>
      <div className="discoveryCard"></div>
      <main>
        {collapseItems}
      </main>
    </Layout>
  );
}
