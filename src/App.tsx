import "./App.css";

import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
