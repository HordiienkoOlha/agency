import Container from "../Container/Container";
import ServiceList from "../ServiceList/ServiceList";
import ArrowRight from "../icons/ArrowRight";

import s from "./OurServices.module.css";

const labelButton = (
  <ul className={s.list}>
    <li>
      <p className={s.labelText}>Read more</p>
    </li>
    <li className={s.item}>
      <ArrowRight />
    </li>
  </ul>
);

function OurServices() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Our Services</h2>
        <h3 className={s.description}>Perfect and Fast Movement</h3>
        <p className={s.text}>
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
        <button type="button" className={s.button}>
          {labelButton}
        </button>
        <ServiceList />
      </div>
    </Container>
  );
}

export default OurServices;
