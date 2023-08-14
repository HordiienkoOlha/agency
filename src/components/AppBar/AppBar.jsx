import useIsMobile from "../../helpers/useIsMobile";

import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Button from "../Button/Button";
import Burger from "../icons/Burger";
import Logo from "../Logo/Logo";
import LogoDesktop from "../LogoDesktop/LogoDesktop";

import s from "./AppBar.module.css";

function AppBar() {
  const isMobile = useIsMobile();
  return (
    <header id="home">
      <div className={s.containerWrapper}>
        <div className={s.container}>
          {isMobile ? (
            <ul className={s.headerWrapperMobile}>
              <li>
                <Logo />
              </li>
              <li>
                <Burger />
              </li>
            </ul>
          ) : (
            <ul className={s.headerWrapperDesktop}>
              <li>
                <LogoDesktop />
              </li>
              <li>
                <BurgerMenu />
              </li>
              <li>
                <div className={s.buttonWrapper}>
                  <Button label="Contact us" reverse={true} />
                </div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default AppBar;

// {isMobile ? <Burger /> : <BurgerMenu />}
