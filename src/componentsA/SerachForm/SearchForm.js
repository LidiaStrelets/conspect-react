import React, { Component } from "react";
import styles from "./SearchForm.module.css";

class SearchForm extends Component {
  state = {
    query: " ",
  };

  handleInputChange = (event) => {
    this.setState({ query: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.query);

    this.setState({ query: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            className={styles.input}
            type="text"
            value={this.state.query}
            onChange={this.handleInputChange}
          />
        </label>
        <button className={styles.searchBtn} type="submit">
          Search
        </button>
      </form>
    );
  }
}

export default SearchForm;
