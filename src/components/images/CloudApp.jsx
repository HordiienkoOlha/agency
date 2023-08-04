import cloudApp1x from "../../images/portfolio/cloud-app-1x-min.jpg";
import cloudApp1xWebp from "../../images/portfolio/cloud-app-1x.webp";
import cloudApp2x from "../../images/portfolio/cloud-app-2x-min.jpg";
import cloudApp2xWebp from "../../images/portfolio/cloud-app-2x.webp";

import cloudApp1xDesk from "../../images/portfolio/cloud-app-1x-d-min.jpg";
import cloudApp1xWebpDesk from "../../images/portfolio/cloud-app-1x-d.webp";
import cloudApp2xDesk from "../../images/portfolio/cloud-app-2x-d-min.jpg";
import cloudApp2xWebpDesk from "../../images/portfolio/cloud-app-2x-d.webp";

function CloudApp() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={cloudApp1xWebpDesk}
        type="image/webp"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={cloudApp2xWebpDesk}
        type="image/webp"
      />
      <source media="(min-width: 1440px)" srcSet={cloudApp1xDesk} />
      <source media="(min-width: 1440px)" srcSet={cloudApp2xDesk} />
      <source
        media="(min-width: 280px)"
        srcSet={cloudApp1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={cloudApp2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={cloudApp1x} />
      <source media="(min-width: 280px)" srcSet={cloudApp2x} />

      <img src={cloudApp1x} alt="Cloud App" />
    </picture>
  );
}

export default CloudApp;
