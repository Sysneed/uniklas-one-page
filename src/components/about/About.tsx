import "./About.css";

type AboutItem = {
  number: string;
  title: string;
  description: string;
  image: string;
};

const aboutItems: AboutItem[] = [
  {
    number: "01",
    title: "Historia",
    description:
      "Con 15 años en el mercado, hemos crecido con compromiso, calidad y confianza.",
    image: "",
  },
  {
    number: "02",
    title: "Misión",
    description:
      "Brindar a nuestros clientes un servicio de calidad, con productos innovadores y de alta durabilidad.",
    image: "",
  },
  {
    number: "03",
    title: "Visión",
    description:
      "Ser una empresa referente a nivel nacional en la comercialización de acabados, reconocida por su calidad, variedad y confianza.",
    image: "",
  },
];

export function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <span className="about__eyebrow">ACERCA DE NOSOTROS</span>

        <h2 className="about__title">
          Más que acabados.
          <br />
          Detalles que nos definen.
        </h2>
      </div>

      <div className="about__grid">
        {aboutItems.map(({ number, title, description, image }) => (
          <article
            key={title}
            className="about__item"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="about__content">
              <span className="about__number">{number}</span>

              <div className="about__text">
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
