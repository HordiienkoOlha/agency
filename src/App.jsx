import "./App.css";
import About from "./components/About/About";
import AppBar from "./components/AppBar/AppBar";
import CardTestimonial from "./components/CardTestimonial/CardTestimonial";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import OurPortfolio from "./components/OurPortfolio/OurPortfolio";
import OurServices from "./components/OurServices/OurServices";
import Project from "./components/Project/Project";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <>
      <AppBar />

      <Hero />
      <Project />
      <About />
      <OurServices />
      <OurPortfolio />
      <CardTestimonial />
      <Testimonial />

      <Footer />
    </>
  );
}

export default App;
