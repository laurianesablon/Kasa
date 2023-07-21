import React from "react";

function Header() {
  return (
    <header>
      <img className="logo" src="LOGO.svg" alt="Logo" />
      <nav>
        <ul>
          <a className="home" href="/"><li>Accueil</li></a>
          <a className="about" href="/about"><li>A Propos</li></a>
          
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
