import rose from "../../images/rose/rose.png";

function RoseImage() {
  return (
    <picture>
      <source srcSet={rose} />
      <img src={rose} alt="Angel Rose" />
    </picture>
  );
}

export default RoseImage;
