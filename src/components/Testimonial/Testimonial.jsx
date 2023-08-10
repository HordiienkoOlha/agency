import PresentationImage from "../images/PresentationImage";
import ConsentImage from "../images/ConsentImage";
import Button from "../Button/Button";
import Container from "../Container/Container";

function Testimonial() {
  return (
    <Container>
      <div>
        <h2>Testimonial</h2>
        <p>People Talk about us</p>
        <PresentationImage />
        <ConsentImage />
        <h3>Interesting Collaboration With Us?</h3>
        <p>Help you to reach your business goal</p>
        <Button label="Get Started" />
      </div>
    </Container>
  );
}

export default Testimonial;
