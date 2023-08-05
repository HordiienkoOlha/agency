import PresentationImage from "../images/PresentationImage";
import ConsentImage from "../images/ConsentImage";
import Button from "../Button/Button";

function Testimonial() {
  return (
    <section>
      <h2>Testimonial</h2>
      <p>People Talk about us</p>
      <PresentationImage />
          <ConsentImage />
          <h3>Interesting Collaboration With Us?</h3>
          <p>Help you to reach your business goal</p>
          <Button label="Get Started"/>
    </section>
  );
}

export default Testimonial;
