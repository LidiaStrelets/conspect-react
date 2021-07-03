import React, { Component } from "react";
import styles from "./TodoEditor.module.css";

class TodoEditor extends Component {
  state = {
    message: "",
  };

  handleTextareaInput = (event) => {
    this.setState({ message: event.currentTarget.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.message);
    this.resetForm();
  };
  resetForm = () => {
    this.setState({
      message: "",
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.addForm}>
        <textarea
          className={styles.textarea}
          value={this.state.message}
          onChange={this.handleTextareaInput}
        />
        <button className={styles.saveBtn} type="submit">
          Save task
        </button>
      </form>
    );
  }
}

export default TodoEditor;
