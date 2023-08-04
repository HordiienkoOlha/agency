import s from "./Project.module.css";

import ProjectImage from "../images/ProjectImage";
import Star from "../icons/Start";
import Card from "../Card/Card";

function Project() {
  return (
    <section className={s.projectWrapper}>
      <ProjectImage />
      <div>
        <Star />
        <h2>Great Project</h2>
        <p>
          800+ <span>Done</span>
        </p>
      </div>
      <Card/>
    </section>
  );
}

export default Project;
