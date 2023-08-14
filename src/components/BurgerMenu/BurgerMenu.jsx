import s from "./BurgerMenu.module.css";

function BurgerMenu() {
  return (
    <nav className={s.navigation}>
      <ul className={s.list}>
        <li className={s.item}>
          <a href="#home" className={s.link}>
            Home
          </a>
        </li>
        <li className={s.item}>
          <a href="#about" className={s.link}>
            About us
          </a>
        </li>
        <li className={s.item}>
          <a href="#sevices" className={s.link}>
            Sevices
          </a>
        </li>
        <li className={s.item}>
          <a href="#projects" className={s.link}>
            Projects
          </a>
        </li>
      </ul>

    </nav>
  );
}

export default BurgerMenu;
