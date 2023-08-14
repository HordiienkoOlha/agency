import LogoImageDesk from "../icons/LogoImageDesk";

import s from "./LogoDesktop.module.css";

function LogoDesktop() {
  return (
    <ul className={s.logoWrapper}>
      <li>
        <LogoImageDesk />
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

export default LogoDesktop;
