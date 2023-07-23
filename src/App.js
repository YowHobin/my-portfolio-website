import { useEffect,useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
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
  /* const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");

  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  } */

  /*   const [loading, setLoading] = useState(false);

  useEffect (() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 8000);
}, []);

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
};

export default App; */

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="loader-container">
          <SyncLoader Syncsize={30} color="#212c29" loading={loading} />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
