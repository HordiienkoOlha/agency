import Monitor from "../icons/Monitor";
import SettingsIcon from "../icons/SettingsIcon";
import PenTool from "../icons/PenTool";
import TVIcon from "../icons/TVIcon";

import s from "./ServiceList.module.css";

function ServiceList() {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <div className={s.iconWrapper}>
          <div className={s.icon}>
            <Monitor />
          </div>
          <div className={s.dotBlue}></div>
        </div>
        <p className={s.text}>Social Media Management</p>
      </li>

      <li className={s.item}>
        <div className={s.iconWrapper}>
          <div className={s.icon}>
            <SettingsIcon />
          </div>
          <div className={s.dotRed}></div>
        </div>
        <p className={s.text}>Search Engine Opimization</p>
      </li>

      <li className={s.item}>
        <div className={s.iconWrapper}>
          <div className={s.icon}>
            <PenTool />
          </div>
          <div className={s.dotGreen}></div>
        </div>
        <p className={s.text}>Design</p>
      </li>

      <li className={s.item}>
        <div className={s.iconWrapper}>
          <div className={s.icon}>
            <TVIcon />
          </div>
          <div className={s.dotOrange}></div>
        </div>
        <p className={s.text}>Ads</p>
      </li>
    </ul>
  );
}

export default ServiceList;
