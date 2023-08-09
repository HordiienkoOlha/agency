import s from "./AppBar.module.css";

import Burger from "../icons/Burger";
import Logo from "../Logo/Logo";
import Container from "../Container/Container";

function AppBar() {
  return (
    <header>
      <Container>
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
      </Container>
    </header>
  );
}

export default AppBar;
