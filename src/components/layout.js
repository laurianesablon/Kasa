import React from "react";

function Header() {
  return (
    <header>
      <img className="logo" src="LOGO.svg" alt="Logo" />
      <nav>
        <ul>
          <li>Accueil</li>
          <li>A Propos</li>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <img className="LOGO_footer" src="LOGO_footer.svg" alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default function Layout({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
