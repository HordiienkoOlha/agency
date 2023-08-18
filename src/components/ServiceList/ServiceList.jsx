// import Monitor from "../icons/Monitor";
// import SettingsIcon from "../icons/SettingsIcon";
// import PenTool from "../icons/PenTool";
// import TVIcon from "../icons/TVIcon";

import s from "./ServiceList.module.css";

function ServiceList() {
  return (
    <ul className={s.list}>
      <li className={s.itemWrapper}>
        <div className={s.item}>
          <div className={s.iconWrapper}>
            <div className={s.dotBlue}></div>
          </div>
          <p className={s.text}>Social Media Management</p>
        </div>
      </li>

      <li className={s.itemWrapper}>
        <div className={s.item}>
          <div className={s.iconWrapper}>
            <div className={s.dotRed}></div>
          </div>
          <p className={s.text}>Search Engine Opimization</p>
        </div>
      </li>

      <li className={s.itemWrapper}>
        <div className={s.item}>
          <div className={s.iconWrapper}>
            <div className={s.dotGreen}></div>
          </div>
          <p className={s.text}>Design</p>
        </div>
      </li>

      <li className={s.itemWrapper}>
        <div className={s.item}>
          <div className={s.iconWrapper}>
            <div className={s.dotOrange}></div>
          </div>
          <p className={s.text}>Ads</p>
        </div>
      </li>
    </ul>
  );
}

export default ServiceList;
