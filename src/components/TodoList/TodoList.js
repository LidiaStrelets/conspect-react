import React from "react";
import styles from "./TodoList.module.css";

const TodoList = ({ todoItems, removeTask, changeTaskStatus }) => (
  <ul className={styles.list}>
    {todoItems.map(({ id, text, completed }, index) => (
      <li key={id} className={styles.item}>
        <div className={styles.wrapper}>
          <span
            onClick={() => {
              changeTaskStatus(index, completed);
            }}
            className={styles.status}
            style={{ backgroundColor: completed && "green" }}
          ></span>
          <p className={styles.text}>{text}</p>
        </div>
        <button type="button" onClick={() => removeTask(id)}>
          Remove task
        </button>
      </li>
    ))}
  </ul>
);

export default TodoList;
