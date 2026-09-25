import "./Footer.css";

import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <>
      <a className="footer__top" href="#home" aria-label="Volver al inicio">
        <ArrowUp />
      </a>
    </>
  );
}
