import "./App.css";
import About from "./Components/about/About";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import { Qualification } from "./Components/qualification/Qualification";
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
      </main>
    </>
  );
}

export default App
