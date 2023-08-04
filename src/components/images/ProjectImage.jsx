import project1x from "../../images/project/group-of-people-1x-min.jpg";
import project1xWebp from "../../images/project/group-of-people-1x.webp";
import project2x from "../../images/project/group of people-2x-min.jpg";
import project2xWebp from "../../images/project/group of people-2x.webp";

import project1xDesk from "../../images/project/group-of-people-1x-d-min.jpg";
import project1xWebpDesk from "../../images/project/group-of-people-1x-d.webp";
import project2xDesk from "../../images/project/group of people-2x-d-min.jpg";
import project2xWebpDesk from "../../images/project/group of people-2x-d.webp";

function ProjectImage() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={project1xWebpDesk}
        type="image/webp"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={project2xWebpDesk}
        type="image/webp"
      />
      <source media="(min-width: 1440px)" srcSet={project1xDesk} />
      <source media="(min-width: 1440px)" srcSet={project2xDesk} />
      <source
        media="(min-width: 280px)"
        srcSet={project1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={project2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={project1x} />
      <source media="(min-width: 280px)" srcSet={project2x} />

      <img src={project1x} alt="Group of people" />
    </picture>
  );
}

export default ProjectImage;
