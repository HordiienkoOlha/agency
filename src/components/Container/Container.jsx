import PropTypes from "prop-types";
import s from "./Container.module.css";

function Container({ children }) {
  return <main className={s.container}>{children}</main>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
