import React, { Component } from "react";
import styles from "./Clock.module.css";

class Clock extends Component {
  state = { time: new Date().toLocaleTimeString() };
  intervalId = null;

  componentDidMount() {
    console.log("set interval");

    this.intervalId = setInterval(
      () => this.setState({ time: new Date().toLocaleTimeString() }),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return <div className={styles.timer}>{this.state.time}</div>;
  }
}

export default Clock;
