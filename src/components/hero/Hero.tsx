import { Eye } from "lucide-react";
import { LinkButton } from "../link-button/LinkButton";

import "./Hero.css";

export function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__content">
        <div className="hero__eyebrow">
          <span />
          DISEÑO QUE SE SIENTE EN CADA DETALLE
        </div>

        <h1 className="hero__title">
          Pequeños detalles.
          <br />
          Espacios <em>únicos.</em>
        </h1>

        <p className="hero__description">
          Zócalos, cornisas y molduras que dan carácter a tus ambientes.
          Encuentra ese acabado que lo une todo.
        </p>

        <div className="hero__actions">
          <LinkButton href="#productos" variant="primary">
            Explorar productos
            <Eye size={22}></Eye>
          </LinkButton>

          <LinkButton href="#contacto" variant="text">
            Recibir asesoría
          </LinkButton>
        </div>

        <div className="hero__footer">
          <strong>15 años</strong>

          <span>
            de experiencia
            <br />
            en cada acabado
          </span>

          <div className="hero__divider" />

          <span>
            Diseño, calidad
            <br />y confianza.
          </span>
        </div>
      </div>

      <div
        className="hero__image"
        style={{ backgroundImage: "" }}
        role="img"
        aria-label="Ambiente con molduras decorativas de pared del catálogo Uniklas"
      >
        <div className="hero__image-content">
          <span>EL ARTE DE TERMINAR BIEN</span>

          <p>
            Un espacio con personalidad.
            <br />
            Desde sus detalles.
          </p>
        </div>
      </div>

      <div className="hero__vertical-label">UNIKLAS · DISEÑA TU ESPACIO</div>
    </section>
  );
}
