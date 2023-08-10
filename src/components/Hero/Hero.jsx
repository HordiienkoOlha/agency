import Button from "../Button/Button";
import Container from "../Container/Container";

import s from "./Hero.module.css";

function Hero() {
  return (
    <Container>
      <div className={s.container}>
        <h1 className={s.title}>
          Make your dream
          <br />
          <span className={s.titlePart}>business goal come true</span>
        </h1>
        <p className={s.text}>
          when you need us for improve your business,
          <br /> then come with us to help your business have reach
          <br /> it, you just sit and feel that goal.
        </p>
        <div className={s.buttonWrapper}>
          <Button label="Start Project" />
        </div>
        {/* <Button label="Реверсна кнопка" reverse={true} />
      <Button label="Інша стилізація" style={{ backgroundColor: 'blue', color: 'white' }} /> */}
      </div>
    </Container>
  );
}

export default Hero;
