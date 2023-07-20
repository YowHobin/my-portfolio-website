import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import Skills from "./Components/skills/Skills";
import Services from "./Components/services/Services";


const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
      </main>
    </>
  );
}

export default App
