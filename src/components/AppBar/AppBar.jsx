import s from "./AppBar.module.css";

import Logo from "../icons/Logo";
import Burger from "../icons/Burger";

function AppBar() {
  return (
    <header>
      <div className={s.container}>
        <ul className={s.headerWrapper}>
          <li>
            <ul className={s.logoWrapper}>
              <li>
                <Logo />
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
          </li>
          <li>
            <Burger />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default AppBar;
