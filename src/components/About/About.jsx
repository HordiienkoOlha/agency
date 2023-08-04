import Button from "../Button/Button";
import PlayCircle from "../icons/PlayCircle";
import TeamImage from "../images/TeamImage";

const labelButton = (
  <>
    <ul>
      <li>
        <PlayCircle />
      </li>
      <li>
        <p>About Us</p>
      </li>
    </ul>
  </>
);

function About() {
  return (
    <section>
      <h2>About Us</h2>
      <h3>Our Teammate</h3>
      <ul>
        <li>
          <p>
            We move with make a Creative Strategy for help your business goal,
            we help to improve your income by a services we have. make your
            content look interesting and make people look for your business2
          </p>
        </li>
        <li>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu neque
            tempor at ut auctor maecenas,Lorem ipsum d
          </p>
        </li>
      </ul>
      <ul>
        <li>
          <Button label="About Us" />
        </li>
        <li>
          <Button label={labelButton} reverse={true} />
        </li>
      </ul>
      <TeamImage />
    </section>
  );
}

export default About;
