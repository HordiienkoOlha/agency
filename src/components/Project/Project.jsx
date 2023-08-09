import s from "./Project.module.css";

import ProjectImage from "../images/ProjectImage";
import Star from "../icons/Start";
import Card from "../Card/Card";
import BlueDots from "../icons/BlueDots";
import RedDots from "../icons/RedDots";

function Project() {
  return (
    <section className={s.container}>
      <div className={s.project}>
        <ProjectImage />
        <div className={s.content}>
          <div className={s.wrapperList}>
            <ul className={s.list}>
              <li>
                <Star />
              </li>
              <li className={s.item}>
                <h2 className={s.title}>Great Project</h2>
              </li>
            </ul>
            <p className={s.preText}>
              800+ <span className={s.text}>Done</span>
            </p>
          </div>
        </div>
        <div className={s.wrapperBlueDots}>
          <BlueDots />
        </div>
        <div className={s.wrapperRedDots}>
          <RedDots />
        </div>

        <Card />
      </div>
    </section>
  );
}

export default Project;
