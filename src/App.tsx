import "./App.css";

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
      </main>
      <footer></footer>
    </>
  );
}

export default App;
