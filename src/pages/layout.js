import React from "react";
import Logo from "../img/LOGO.svg";
import LogoFooter from "../img/LOGO_footer.svg";

function Header() {
  return (
    <header>
      <a href="/">
        <img className="logo" src={Logo} alt="Logo" />
      </a>
      
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
      <img className="LOGO_footer" src={LogoFooter} alt="Logo" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default function Layout({children}) {
  return (
    <div>
      <Header />
      <main>
      {children}
      </main>
      <Footer />
    </div>
  );
}
