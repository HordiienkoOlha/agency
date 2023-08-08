import designApp1x from "../../images/portfolio/design-app-1x-min.jpg";
import designApp1xWebp from "../../images/portfolio/design-app-1x.webp";
import designApp2x from "../../images/portfolio/design-app-2x-min.jpg";
import designApp2xWebp from "../../images/portfolio/design-app-2x.webp";

import designApp1xDesk from "../../images/portfolio/design-app-1x-d-min.jpg";
import designApp1xWebpDesk from "../../images/portfolio/design-app-1x-d.webp";
import designApp2xDesk from "../../images/portfolio/design-app-2x-d-min.jpg";
import designApp2xWebpDesk from "../../images/portfolio/design-app-2x-d.webp";

function DesignApp() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={designApp1xWebpDesk}
        type="image/webp"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={designApp2xWebpDesk}
        type="image/webp"
      />
      <source media="(min-width: 1440px)" srcSet={designApp1xDesk} />
      <source media="(min-width: 1440px)" srcSet={designApp2xDesk} />
      <source
        media="(min-width: 280px)"
        srcSet={designApp1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={designApp2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={designApp1x} />
      <source media="(min-width: 280px)" srcSet={designApp2x} />

      <img src={designApp1x} alt="Design App" width="300px" height="300px" />
    </picture>
  );
}

export default DesignApp;
