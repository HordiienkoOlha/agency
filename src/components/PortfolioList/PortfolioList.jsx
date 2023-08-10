import DesignApp from "../images/DesignApp";
import CloudApp from "../images/CloudApp";
import ByteApp from "../images/ByteApp";


import s from "./PortfolioList.module.css";

function PortfolioList() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <DesignApp />
        <p className={s.text}>Design Furniture App</p>
      </li>
      <li className={s.item}>
        <CloudApp />
        <p className={s.text}>Cloud App</p>
      </li>
      <li className={s.item}>
        <ByteApp />
        <p className={s.text}>Design Byte App</p>
      </li>
    </ul>
  );
}

export default PortfolioList;