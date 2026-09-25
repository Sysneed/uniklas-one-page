import "./Contact.css";

import { LinkButton } from "../link-button/LinkButton";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact__main">
        <span className="contact__eyebrow">HAGAMOS REALIDAD TU ESPACIO</span>

        <h2 className="contact__title">
          Tu próximo proyecto
          <br />
          empieza con una
          <br />
          <em>conversación.</em>
        </h2>

        <p className="contact__description">
          Cuéntanos qué necesitas. Te ayudamos a encontrar
          <br />
          el acabado adecuado.
        </p>

        <div className="contact__action">
          <LinkButton
            href="https://wa.me/51947332715?text=Hola%20Uniklas%2C%20quisiera%20asesor%C3%ADa%20para%20mi%20proyecto."
            variant="primary"
          >
            Conversemos por WhatsApp
            <FaWhatsapp />
          </LinkButton>
        </div>
      </div>

      <div className="contact__details">
        <div className="contact__location">
          <span className="contact__label">VISÍTANOS</span>

          <h3>Estamos en Santiago de Surco</h3>

          <address>
            Calle María Reiche 189
            <br />
            Centro Comercial Venturo
            <br />
            Interior 218 · Piso 2
          </address>

          <div className="contact__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4891.327545864187!2d-76.9963274!3d-12.1209222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9005769c657%3A0x23f4f42364eae2a1!2sUNIKLAS!5e0!3m2!1ses!2spe!4v1747102141898!5m2!1ses!2spe"
              title="Ubicación de Uniklas"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="contact__divider" />

        <div className="contact__channels">
          <div className="contact__channel">
            <span className="contact__label">LLÁMANOS</span>

            <a href="tel:+51947332715">+51 947 332 715</a>

            <a href="tel:+51934232698">+51 934 232 698</a>
          </div>

          <div className="contact__channel">
            <span className="contact__label">ESCRÍBENOS</span>

            <a href="mailto:ventas@uniklas.pe">
              ventas@uniklas.pe
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
