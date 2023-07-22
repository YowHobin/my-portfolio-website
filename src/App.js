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
  return (
    <>
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
    </>
  );
}

export default App
