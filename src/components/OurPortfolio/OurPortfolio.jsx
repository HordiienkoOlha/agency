import Button from "../Button/Button";
import Container from "../Container/Container";
import PortfolioList from "../PortfolioList/PortfolioList";

import s from "./OurPortfolio.module.css";

function OurPortfolio() {
  return (
    <Container>
      <div className={s.container}>
        <h2 className={s.title}>Our Portfolio</h2>
        <h3 className={s.description}>What do we do</h3>
        <p className={s.text}>
          all projects that we have already done , proven can help to use more
          comfortable, then can used by client from our business
        </p>
        <PortfolioList />
        <div className={s.buttonWrapper}>
          <Button label="See All Portfolio" reverse={true} />
        </div>
      </div>
    </Container>
  );
}

export default OurPortfolio;
