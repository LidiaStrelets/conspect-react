import React from "react"
import defaultImg from './../logo.svg'
import PropTypes from "prop-types"
const Painting = ({url, title, author, price}) => {
    return <div>
    <img src={url} alt={title} width="480"/>
    <h2>{title}</h2>
    <p>Author: <a href={author.url} target="_blanc">{ author.tag}</a></p>
    <p>Price: { price} money</p>
    <button type="button">Add to list</button>
  </div>
}
Painting.defaultProps = {
  url: defaultImg
}
Painting.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired,
  price: PropTypes.number.isRequired,
}
export default Painting