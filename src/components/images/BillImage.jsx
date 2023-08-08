import bill from "../../images/bill/bill.png";
import billDesc from "../../images/bill/bill-d.png";

function BillImage() {
  return (
    <picture>
      <source media="(min-width: 1440px)" srcSet={billDesc} />
      <source srcSet={bill} />
      <img src={bill} alt="Bill Adams" width="15.422px" height="15.422px" />
    </picture>
  );
}

export default BillImage;
