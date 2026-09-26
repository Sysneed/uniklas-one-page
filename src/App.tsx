import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Product } from "./components/section-product/Product";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Product />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
