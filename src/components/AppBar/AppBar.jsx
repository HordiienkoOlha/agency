// import s from "./AppBar.module.css";

import Burger from "../icons/Burger";
import Logo from "../icons/Logo";

function AppBar() {
  return (
    <>
      <ul>
        <li>
          <Logo />
        </li>
        <li>
          <ul>
            <li>
              <p>Agency</p>
            </li>
            <li>
              <p>Creative</p>
            </li>
          </ul>
        </li>
        <li>
          <Burger />
        </li>
      </ul>
    </>
  );
}

export default AppBar;
