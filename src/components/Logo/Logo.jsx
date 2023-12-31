import LogoImageMob from "../icons/LogoImageMob";

import s from "./Logo.module.css";

function Logo() {
  return (
    <ul className={s.logoWrapper}>
      <li>
        <LogoImageMob />
      </li>
      <li>
        <ul className={s.logoList}>
          <li>
            <p className={s.logoTitle}>Agency</p>
          </li>
          <li>
            <p className={s.logoItem}>Creative</p>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default Logo;
