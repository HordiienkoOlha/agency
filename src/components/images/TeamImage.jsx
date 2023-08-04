import team1x from "../../images/team/team-1x-min.jpg";
import team1xWebp from "../../images/team/team-1x.webp";
import team2x from "../../images/team/team-2x-min.jpg";
import team2xWebp from "../../images/team/team-2x.webp";

import team1xDesk from "../../images/team/team-1x-d-min.jpg";
import team1xWebpDesk from "../../images/team/team-1x-d.webp";
import team2xDesk from "../../images/team/team-2x-d-min.jpg";
import team2xWebpDesk from "../../images/team/team-2x-d.webp";

function TeamImage() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={team1xWebpDesk}
        type="image/webp"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={team2xWebpDesk}
        type="image/webp"
      />
      <source media="(min-width: 1440px)" srcSet={team1xDesk} />
      <source media="(min-width: 1440px)" srcSet={team2xDesk} />
      <source
        media="(min-width: 280px)"
        srcSet={team1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={team2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={team1x} />
      <source media="(min-width: 280px)" srcSet={team2x} />

      <img src={team1x} alt="Our Team" />
    </picture>
  );
}

export default TeamImage;
