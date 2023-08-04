import DesignApp from "../images/DesignApp";
import CloudApp from "../images/CloudApp";
import ByteApp from "../images/ByteApp";

function PortfolioList() {
  return (
    <ul>
      <li>
        <DesignApp />
        <p>Design Furniture App</p>
      </li>
      <li>
        <CloudApp />
        <p>Cloud App</p>
      </li>
      <li>
        <ByteApp />
        <p>Design Byte App</p>
      </li>
    </ul>
  );
}

export default PortfolioList;