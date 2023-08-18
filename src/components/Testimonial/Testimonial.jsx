import PresentationImage from "../images/PresentationImage";
import ConsentImage from "../images/ConsentImage/ConsentImage";
import Button from "../Button/Button";
import Container from "../Container/Container";
// import Slider from "../Slider/Slider";

import s from "./Testimonial.module.css";
import CardTestimonial from "../CardTestimonial/CardTestimonial";

function Testimonial() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Testimonial</h2>
        <p className={s.text}>People Talk about us</p>
        <div className={s.slider}>
          <CardTestimonial />
        </div>
        <div className={s.gallery}>
          <div className={s.wrapper}>
            <div className={s.imageWrapper}>
              <PresentationImage />
            </div>
            <div className={s.image}>
              <ConsentImage />
            </div>
          </div>
        </div>
        <h3 className={s.question}>Interesting Collaboration With Us?</h3>
        <p className={s.content}>Help you to reach your business goal</p>
        <Button label="Get Started" />
      </div>
    </Container>
  );
}

export default Testimonial;
