import { useState } from "react";
import "./App.css";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Portfolio from "./Components/portfolio/Portfolio";
import { Qualification } from "./Components/qualification/Qualification";
import ScrollUp from "./Components/scrollUp/ScrollUp";
import Services from "./Components/services/Services";
import Skills from "./Components/skills/Skills";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }
  return (
    <>
      !loading && (
      <Header />
      <main className="main">
        <Home />
        <About />
        <Qualification />
        <Skills />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      )
    </>
  );
};

export default App;
