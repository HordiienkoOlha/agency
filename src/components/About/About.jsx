import Button from "../Button/Button";
import PlayCircle from "../icons/PlayCircle";
import PurpleDots from "../icons/PurpleDots";
import TeamImage from "../images/TeamImage";

import s from "./About.module.css";

const labelButton = (
  <>
    <ul className={s.listLabelButton}>
      <li>
        <PlayCircle />
      </li>
      <li className={s.buttonTitle}>
        <p>About Us</p>
      </li>
    </ul>
  </>
);

function About() {
  return (
    <section className={s.container}>
      <h2 className={s.title}>About Us</h2>
      <h3 className={s.description}>Our Teammate</h3>
      <ul className={s.list}>
        <li>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business2
          </p>
        </li>
        <li className={s.item}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
            tempor at ut auctor maecenas,Lorem ipsum d
          </p>
        </li>
      </ul>
      <ul className={s.listButton}>
        <li>
          <Button label="About Us" />
        </li>
        <li>
          <button type="button" className={s.buttonReverse}>
            {labelButton}
          </button>
        </li>
      </ul>
      <div className={s.imageWrapper}>
        <TeamImage />
        <div className={s.wrapperDots}>
          <PurpleDots />
        </div>
      </div>
    </section>
  );
}

export default About;
