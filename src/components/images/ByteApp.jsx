import byteApp1x from "../../images/portfolio/byte-app-1x-min.jpg";
import byteApp1xWebp from "../../images/portfolio/byte-app-1x.webp";
import byteApp2x from "../../images/portfolio/byte-app-2x-min.jpg";
import byteApp2xWebp from "../../images/portfolio/byte-app-2x.webp";

import byteApp1xDesk from "../../images/portfolio/byte-app-1x-d-min.jpg";
import byteApp1xWebpDesk from "../../images/portfolio/byte-app-1x-d.webp";
import byteApp2xDesk from "../../images/portfolio/byte-app-2x-d-min.jpg";
import byteApp2xWebpDesk from "../../images/portfolio/byte-app-2x-d.webp";

function ByteApp() {
  return (
    <picture>
      <source
        media="(min-width: 1440px)"
        srcSet={byteApp1xWebpDesk}
        type="image/webp"
        width="350px"
        height="350px"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={byteApp2xWebpDesk}
        type="image/webp"
        width="350px"
        height="350px"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={byteApp1xDesk}
        width="350px"
        height="350px"
      />
      <source
        media="(min-width: 1440px)"
        srcSet={byteApp2xDesk}
        width="350px"
        height="350px"
      />
      <source
        media="(min-width: 280px)"
        srcSet={byteApp1xWebp}
        type="image/webp"
      />
      <source
        media="(min-width: 280px)"
        srcSet={byteApp2xWebp}
        type="image/webp"
      />

      <source media="(min-width: 280px)" srcSet={byteApp1x} />
      <source media="(min-width: 280px)" srcSet={byteApp2x} />

      <img src={byteApp1x} alt="Byte App" width="300px" height="301.765px" />
    </picture>
  );
}

export default ByteApp;
