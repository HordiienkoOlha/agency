import Monitor from "../icons/Monitor";
import SettingsIcon from "../icons/SettingsIcon";
import PenTool from "../icons/PenTool";
import TVIcon from "../icons/TVIcon";

function ServiceList() {
  return (
    <ul>
      <li>
        <Monitor />
        <p>Social Media Management</p>
      </li>
      <li>
        <SettingsIcon />
        <p>Search Engine Opimization</p>
      </li>
      <li>
        <PenTool />
        <p>Design</p>
      </li>
      <li>
        <TVIcon />
        <p>Ads</p>
      </li>
    </ul>
  );
}

export default ServiceList;
