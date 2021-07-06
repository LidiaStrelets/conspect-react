import React from "react";
import styles from "./TodoList.module.css";
import ToDoItem from "../ToDoItem";

const TodoList = ({ todoItems, removeTask, changeTaskStatus, filter }) => (
  <ul className={styles.list}>
    {todoItems.map(({ id, text, completed }, index) => (
      <li key={id} className={styles.item}>
        <ToDoItem
          changeTaskStatus={() => changeTaskStatus(index)}
          completed={completed}
          text={text}
          removeTask={() => removeTask(id)}
        />
      </li>
    ))}
  </ul>
);

export default TodoList;
