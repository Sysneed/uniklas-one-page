import "./Contact.css";

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

import { LinkButton } from "../link-button/LinkButton";

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

          <a
            className="contact__directions"
            href="https://www.google.com/maps/search/?api=1&query=UNIKLAS%20Calle%20Mar%C3%ADa%20Reiche%20189%20Santiago%20de%20Surco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Cómo llegar
            <span aria-hidden="true">↗</span>
          </a>
        </div>

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

          <div className="contact__channel">
            <span className="contact__label">HORARIO</span>

            <div className="contact__hours">
              <span>Lun – Vie</span>
              <strong>9:00 am – 5:30 pm</strong>

              <span>Sábado</span>
              <strong>9:00 am – 1:00 pm</strong>
            </div>
          </div>

          <div className="contact__channel">
            <span className="contact__label">REDES SOCIALES</span>

            <div className="contact__socials">
              <a
                href="#"
                className="contact__social"
                aria-label="Facebook de Uniklas"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="contact__social"
                aria-label="Instagram de Uniklas"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="contact__social"
                aria-label="TikTok de Uniklas"
              >
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
