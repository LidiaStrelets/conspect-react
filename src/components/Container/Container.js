import React from "react";
import PropTypes from "prop-types";

const Container = ({ children }) => <>{children}</>;

Container.defaultProps = {
  children: [],
};
Container.prototype = {
  children: PropTypes.node,
};

export default Container;
