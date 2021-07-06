import React from "react";
import styles from "./IconBtn.module.css";
import PropTypes from "prop-types";

const IconBtn = ({ children, onClick, ...allyProps }) => (
  <button
    type="button"
    className={styles.iconBtn}
    onClick={onClick}
    {...allyProps}
  >
    {children}
  </button>
);

IconBtn.defaultProps = {
  onClick: () => null,
  children: null,
};
IconBtn.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  "aria-label": PropTypes.string.isRequired,
};

export default IconBtn;
