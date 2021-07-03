import React, { Component } from "react";

class Form extends Component {
  state = {
    name: "",
    nickName: "",
    level: "junior",
    licence: false,
  };

  handleInputChange = (event) => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  handleLicenceCheckbox = (event) => {
    console.log(event.currentTarget.checked);
    this.setState((prevState) => ({
      licence: !prevState.licence,
    }));
  };
  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.onSubmitForm(this.state);

    this.resetForm();
  };
  resetForm = () => {
    this.setState({ name: "", nickName: "" });
  };

  render() {
    const { name } = this.state;
    const { nickName } = this.state;
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          Nick Name:{" "}
          <input
            type="text"
            name="nickName"
            value={nickName}
            onChange={this.handleInputChange}
          />
        </label>

        <p>Choose your level:</p>
        <label>
          <input
            type="radio"
            value="junior"
            name="level"
            onChange={this.handleInputChange}
            checked={this.state.level === "junior"}
          />{" "}
          Junior
        </label>
        <label>
          <input
            type="radio"
            value="middle"
            name="level"
            onChange={this.handleInputChange}
            checked={this.state.level === "middle"}
          />{" "}
          Middle
        </label>
        <label>
          <input
            type="radio"
            value="senior"
            name="level"
            onChange={this.handleInputChange}
            checked={this.state.level === "senior"}
          />{" "}
          Senior
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            name="licence"
            onChange={this.handleLicenceCheckbox}
            checked={this.state.licence}
          />
          I agree
        </label>
        <br />
        <button type="submit" disabled={!this.state.licence}>
          Send data
        </button>
      </form>
    );
  }
}

export default Form;
