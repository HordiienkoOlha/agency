import BillImage from "../images/BillImage";
import s from "./Card.module.css"

function Card() {
  return (
    <div className={s.cardWrapper}>
      <div className={s.card}>

      <ul className={s.list}>
        <li >
          <BillImage />
        </li>
        <li className={s.item}>
          <ul>
            <li>
              <h3 className={s.title}>Bill Adams</h3>
            </li>
            <li>
              <h4 className={s.description}>CEO UpTech</h4>
            </li>
          </ul>
        </li>
      </ul>
      <p className={s.text}>
        “ This team is really the best in its field,I don&apos;t regret working with
        them, and will come back again thanks “
      </p>
      </div>
    </div>
  );
}

export default Card;
