import { lazy, Suspense } from "react";
import AppBar from "./components/AppBar/AppBar";
import Hero from "./components/Hero/Hero";

import "./App.css";

const Project = lazy(() => import("./components/Project/Project"));
const About = lazy(() => import("./components/About/About"));
const OurServices = lazy(() => import("./components/OurServices/OurServices"));
const OurPortfolio = lazy(() =>
  import("./components/OurPortfolio/OurPortfolio")
);
const Slider = lazy(() => import("./components/Slider/Slider"));
const Testimonial = lazy(() => import("./components/Testimonial/Testimonial"));
const Footer = lazy(() => import("./components/Footer/Footer"));

function App() {
  return (
    <>
      <AppBar />
      <main>
        <Hero />
        <Suspense fallback={<div>Loading...</div>}>
          <Project />
          <About />
          <OurServices />
          <OurPortfolio />
          <Slider />
          <Testimonial />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default App;
