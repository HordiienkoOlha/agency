import rose from "../../images/rose/rose.png";

function RoseImage() {
  return (
    <picture>
      <source srcSet={rose} />
      <img src={rose} alt="Angel Rose" width="70px" height="70px" />
    </picture>
  );
}

export default RoseImage;
