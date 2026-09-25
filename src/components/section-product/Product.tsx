import "./Product.css";

import { useState } from "react";

import { LinkButton } from "../link-button/LinkButton";
import { Download } from "lucide-react";

type ProductCategory = "Zócalos" | "Cornisas" | "Molduras" | "Wall Panel";

type Category = {
  name: ProductCategory;
  imageLabel: string;
  imageText: string;
  title: string;
  description: string;
  image: string;
  catalogUrl: string;
};

const categories: Category[] = [
  {
    name: "Zócalos",
    imageLabel: "ZÓCALOS",
    imageText: "Un encuentro limpio entre cada superficie.",
    title: "La base de un gran espacio.",
    description:
      "Diseñados para lograr una transición limpia y armoniosa entre paredes y pisos, aportando un acabado cuidado a cada ambiente.",
    image: "",
    catalogUrl: "",
  },
  {
    name: "Cornisas",
    imageLabel: "CORNISAS",
    imageText: "Una transición elegante hacia el techo.",
    title: "Eleva cada ambiente.",
    description:
      "Un acabado que da continuidad al encuentro entre paredes y techos, creando espacios más definidos y elegantes.",
    image: "",
    catalogUrl: "",
  },
  {
    name: "Molduras",
    imageLabel: "MOLDURAS",
    imageText: "Relieves que transforman paredes simples.",
    title: "Paredes con personalidad.",
    description:
      "Detalles que aportan relieve, carácter y nuevas posibilidades para transformar tus paredes.",
    image: "",
    catalogUrl: "",
  },
  {
    name: "Wall Panel",
    imageLabel: "WALL PANEL",
    imageText: "Superficies que invitan a mirar y sentir.",
    title: "Textura que transforma.",
    description:
      "Una solución decorativa para crear superficies con mayor presencia visual y espacios con identidad.",
    image: "",
    catalogUrl: "",
  },
];

export function Product() {
  const [activeCategory, setActiveCategory] =
    useState<ProductCategory>("Zócalos");

  const category = categories.find(({ name }) => name === activeCategory)!;

  return (
    <section id="products" className="products">
      <div className="products__header">
        <span className="products__eyebrow">NUESTRO CATÁLOGO</span>

        <h2 className="products__title">
          El acabado ideal
          <br />
          empieza aquí.
        </h2>
      </div>

      <div
        className="products__filters"
        role="group"
        aria-label="Familia de productos"
      >
        {categories.map(({ name }) => (
          <button
            key={name}
            type="button"
            className={`products__filter ${
              activeCategory === name ? "products__filter--active" : ""
            }`}
            aria-pressed={activeCategory === name}
            onClick={() => setActiveCategory(name)}
          >
            {name}
          </button>
        ))}
      </div>

      <div className="products__showcase">
        <div
          className="products__image"
          style={{
            backgroundImage: `url(${category.image})`,
          }}
          role="img"
          aria-label={`Ambiente con ${category.name.toLowerCase()} Uniklas`}
        >
          <div className="products__image-content">
            <span>{category.imageLabel}</span>

            <p>{category.imageText}</p>
          </div>
        </div>

        <div className="products__content">
          <span className="products__category-eyebrow">{category.name}</span>

          <h3 className="products__category-title">{category.title}</h3>

          <p className="products__description">{category.description}</p>

          <div className="products__action">
            <LinkButton href={category.catalogUrl} variant="primary">
              Descargar catálogo PDF
              <Download size={22}></Download>
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
