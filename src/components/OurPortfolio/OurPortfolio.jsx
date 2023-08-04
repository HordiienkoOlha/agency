import Button from "../Button/Button";
import PortfolioList from "../PortfolioList/PortfolioList";

function OurPortfolio() {
  return (
    <section>
      <h2>Our Portfolio</h2>
      <h3>What do we do</h3>
      <p>
        all projects that we have already done , proven can help to use more
        comfortable, then can used by client from our business
      </p>
      <PortfolioList />
      <Button label="See All Portfolio" reverse={true} />
    </section>
  );
}

export default OurPortfolio;
