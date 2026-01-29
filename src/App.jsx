import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/hero";
import Features from "./components/features";
import Gallery from "./components/gallery";
import Pricing from "./components/pricing";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Hero />
      <Features />
      <Gallery />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
