import "./Footer.css";

import { ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <p>&copy; {currentYear} Uniklas. Todos los derechos reservados.</p>
      </footer>

      <a className="footer__top" href="#home" aria-label="Volver al inicio">
        <ArrowUp />
      </a>
    </>
  );
}
