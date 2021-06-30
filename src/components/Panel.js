import React from "react";
import PropTypes from "prop-types";

const styles = {
  container: {
    width: 200,
    border: "2px solid red",
  },
};

const Panel = ({ title, children }) => (
  <div style={styles.container}>
    {title && <h2>{title}</h2>}
    {children}
  </div>
);

Panel.defaultProps = {
  title: "",
  children: [],
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Panel;
