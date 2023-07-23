import React from "react";
import Layout from "./layout";

export default function Error() {
  return (
  <Layout>
    <main>
    <p className="error_404">404</p>
    <p className="oups">Oups! La page que vous demandez n'existe pas.</p>
    <a href="/"><p className="error_link_accueil">Retourner sur la page d’accueil</p></a>
    </main>
  </Layout>)
}
