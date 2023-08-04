import PropTypes from "prop-types";
import s from  "./Button.module.css";

function Button({ label, reverse, style }) {
  const buttonClass = reverse ? s.buttonReverse : s.button;

  return (
    <button className={buttonClass} style={style}>
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
  style: PropTypes.string,
};