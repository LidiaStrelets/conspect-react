import React from "react";
import styles from "./ToDoItem.module.css";
import IconBtn from "../IconBtn";

import { ReactComponent as RemoveIcon } from "./../../icons/remove.svg";

const ToDoItem = ({ changeTaskStatus, completed, text, removeTask }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <span
          onClick={changeTaskStatus}
          className={styles.status}
          style={{ backgroundColor: completed && "green" }}
        ></span>
        <p className={styles.text}>{text}</p>
      </div>
      <IconBtn aria-label="Remove task from list " onClick={removeTask}>
        <RemoveIcon width="30" height="30" />
      </IconBtn>
      {/* <button type="button" >
        Remove task
      </button> */}
    </>
  );
};

export default ToDoItem;
