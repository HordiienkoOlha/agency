import RoseImage from "../images/RoseImage";


import s from "./CardTestimonial.module.css";

function CardTestimonial() {
  return (
    <div className={s.card}>
      <ul className={s.wrapperContent} >
        <li className={s.avatar}>
          <RoseImage />
        </li>
        <li>
          <ul className={s.list}>
            <li className={s.name}>
              <h3>Angel Rose</h3>
            </li>
            <li className={s.description}>
              <h4>Creative Manager</h4>
            </li>
          </ul>
        </li>
      </ul>
      <p className={s.text}>
        “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit”
      </p>
    </div>
  );
}

export default CardTestimonial;
