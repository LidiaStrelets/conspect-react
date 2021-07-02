import React from "react";
import Controls from "./Controls";
import styles from "./Counter.module.css";

class Counter extends React.Component {
  state = {
    value: 0,
  };
  handleIncrementBtnClick = () => {
    this.setState((prevState) => ({ value: prevState.value + 1 }));
  };
  handleDecrementBtnClick = () => {
    this.setState((prevState) => ({ value: prevState.value - 1 }));
  };
  render() {
    const { value } = this.state;
    return (
      <div className={styles.Counter}>
        <span className={styles.value}>{value}</span>
        <Controls
          onIncrement={this.handleIncrementBtnClick}
          onDecrement={this.handleDecrementBtnClick}
        />
      </div>
    );
  }
}

export default Counter;
