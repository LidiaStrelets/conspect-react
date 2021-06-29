import React from "react";
import Painting from "./Painting";

import PropTypes from "prop-types"

const List = ({ paintings }) => (
  <ul>
    {paintings.map(({ title, url, author, price, id }) => (<li key={id}><Painting title={title} url={url} author={author} price={price} /></li>))}
  </ul>
)

List.propTypes = {
  paintings: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired})).isRequired
}

export default List