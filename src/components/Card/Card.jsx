import BillImage from "../images/BillImage";

function Card() {
  return (
    <>
      <ul>
        <li>
          <BillImage />
        </li>
        <li>
          <ul>
            <li>
              <h3>Bill Adams</h3>
            </li>
            <li>
              <h4>CEO UpTech</h4>
            </li>
          </ul>
        </li>
      </ul>
      <p>
        “ This team is really the best in its field,I don&apos;t regret working with
        them, and will come back again thanks “
      </p>
    </>
  );
}

export default Card;
