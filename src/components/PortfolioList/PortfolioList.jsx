import s from "./PortfolioList.module.css";

function PortfolioList() {
  return (
    <ul className={s.list}>
      <li className={s.itemDesign}>
        <p className={s.text}>Design Furniture App</p>
      </li>
      <li className={s.itemCloud}>
        <p className={s.text}>Cloud App</p>
      </li>
      <li className={s.itemByte}>
        <p className={s.text}>Design Byte App</p>
      </li>
    </ul>
  );
}

export default PortfolioList;
