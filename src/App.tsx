import "./App.css";
import { About } from "./components/about/About";

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
