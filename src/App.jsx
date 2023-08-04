import "./App.css";
import About from "./components/About/About";
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";
import OurServices from "./components/OurServices/OurServices";
import Project from "./components/Project/Project";

function App() {
  return (
    <>
      <AppBar />

      <Hero />
      <Project />
      <About />
      <OurServices/>
    </>
  );
}

export default App;
