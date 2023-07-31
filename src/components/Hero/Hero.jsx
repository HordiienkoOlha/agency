import s from "./Hero.module.css";

function Hero() {
  return (
    <section>
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
    </section>
  );
}

export default Hero;
