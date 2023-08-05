import consent1x from "../../images/testimonial/consent-1x-min.jpg";
import consent1xWebp from "../../images/testimonial/consent-1x.webp";
import consent2x from "../../images/testimonial/consent-2x-min.jpg";
import consent2xWebp from "../../images/testimonial/consent-2x.webp";

import consent1xDesk from "../../images/testimonial/consent-1x-d-min.jpg";
import consent1xWebpDesk from "../../images/testimonial/consent-1x-d.webp";
import consent2xDesk from "../../images/testimonial/consent-2x-d-min.jpg";
import consent2xWebpDesk from "../../images/testimonial/consent-2x-d.webp";

function ConsentImage() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={consent1xWebpDesk}
        type="image/webp"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={consent2xWebpDesk}
        type="image/webp"
      />
      <source media="(min-width: 1440px)" srcSet={consent1xDesk} />
      <source media="(min-width: 1440px)" srcSet={consent2xDesk} />
      <source
        media="(min-width: 280px)"
        srcSet={consent1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={consent2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={consent1x} />
      <source media="(min-width: 280px)" srcSet={consent2x} />

      <img src={consent1x} alt="Consent" />
    </picture>
  );
}

export default ConsentImage;
