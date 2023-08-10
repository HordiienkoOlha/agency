import Burger from "../icons/Burger";
import Logo from "../Logo/Logo";

import s from "./AppBar.module.css";

function AppBar() {
  return (
    <header>
      <div className={s.containerWrapper}>
        <div className={s.container}>
          <ul className={s.headerWrapper}>
            <li>
              <Logo />
            </li>
            <li>
              <Burger />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default AppBar;
