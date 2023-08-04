import ServiceList from "../ServiceList/ServiceList";
import ArrowRight from "../icons/ArrowRight";

const labelButton = (
  <ul>
    <li>
      <p>Read more</p>
    </li>
    <li>
      <ArrowRight />
    </li>
  </ul>
);

function OurServices() {
  return (
    <section>
      <h2>Our Services</h2>
      <h3>Perfect and Fast Movement</h3>
      <p>
        We move with make a Creative Strategy for help your business goal, we
        help to improve your income by a services we have. make your content
        look interesting and make people look for your business
      </p>
      <button type="button">{labelButton}</button>
      <ServiceList />
    </section>
  );
}

export default OurServices;
