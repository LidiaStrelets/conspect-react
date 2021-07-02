import React from "react";
import styles from "./Counter.module.css";

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={styles.controls}>
    <button type="button" onClick={onIncrement}>
      Increase for 1
    </button>
    <button type="button" onClick={onDecrement}>
      Decrease for 1
    </button>
  </div>
);

export default Controls;
