import s from "./AppBar.module.css";

import Burger from "../icons/Burger";
import Logo from "../Logo/Logo";

function AppBar() {
  return (
    <header>
      <div className={s.container}>
        <ul className={s.headerWrapper}>
          <li>
            <Logo/>
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
