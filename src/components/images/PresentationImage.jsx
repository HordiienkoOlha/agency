import presentation1x from "../../images/testimonial/presentation-1x-min.jpg";
import presentation1xWebp from "../../images/testimonial/presentation-1x.webp";
import presentation2x from "../../images/testimonial/presentation-2x-min.jpg";
import presentation2xWebp from "../../images/testimonial/presentation-2x.webp";

import presentation1xDesk from "../../images/testimonial/presentation-1x-d-min.jpg";
import presentation1xWebpDesk from "../../images/testimonial/presentation-1x-d.webp";
import presentation2xDesk from "../../images/testimonial/presentation-2x-d-min.jpg";
import presentation2xWebpDesk from "../../images/testimonial/presentation-2x-d.webp";

function PresentationImage() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={presentation1xWebpDesk}
        type="image/webp"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={presentation2xWebpDesk}
        type="image/webp"
      />
      <source media="(min-width: 1440px)" srcSet={presentation1xDesk} />
      <source media="(min-width: 1440px)" srcSet={presentation2xDesk} />
      <source
        media="(min-width: 280px)"
        srcSet={presentation1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={presentation2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={presentation1x} />
      <source media="(min-width: 280px)" srcSet={presentation2x} />

      <img src={presentation1x} alt="presentation" />
    </picture>
  );
}

export default PresentationImage;
