import React from "react";
import Logo from "../img/LOGO.svg";
import LogoFooter from "../img/LOGO_footer.svg";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img className="logo" src={Logo} alt="Logo" />
      </Link>

      <nav>
        <ul>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
          >
            <li>A Propos</li>
          </NavLink>
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

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
