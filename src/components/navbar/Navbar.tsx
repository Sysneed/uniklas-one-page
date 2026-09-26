import "./Navbar.css";

import { Menu, Package, X } from "lucide-react";
import { useState } from "react";
import { Button } from "../button/Button";
import { LinkButton } from "../link-button/LinkButton";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" id="home" aria-label="Navegación principal">
      <div className="navbar__brand">
        <LinkButton href="#home" onClick={closeMenu}>
          <img className="navbar__logo" alt="Uniklas" />
        </LinkButton>
      </div>

      <ul
        id="navbar-menu"
        className={`navbar__links ${isMenuOpen ? "navbar__links--open" : ""}`}
      >
        <li className="navbar__item">
          <LinkButton href="#products" onClick={closeMenu}>
            Productos
          </LinkButton>
        </li>

        <li className="navbar__item">
          <LinkButton href="#about" onClick={closeMenu}>
            Nosotros
          </LinkButton>
        </li>

        <li className="navbar__item">
          <LinkButton href="#contact" onClick={closeMenu}>
            Contacto
          </LinkButton>
        </li>
      </ul>

      <div className="navbar__cta">
        <LinkButton href="#contact" variant="primary">
          Solicitar cotización
          <Package size={22} />
        </LinkButton>
      </div>

      <div className="navbar__menu">
        <Button
          variant="icon"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </Button>
      </div>
    </nav>
  );
}
