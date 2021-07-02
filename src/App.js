import "./App.css";
import React, { Component } from "react";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import todoItems from "./todoItems.json";
import colorPickerOptions from "./colorPickerOptions.json";

class App extends Component {
  state = {
    todoItems,
  };

  removeTask = (taskId) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.filter((item) => item.id !== taskId),
    }));
  };

  changeTaskStatus = (index, status) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.map((item, idx) =>
        idx === index ? { ...item, completed: !status } : item
      ),
    }));
  };

  render() {
    const { todoItems } = this.state;

    return (
      <div className="App">
        <div>Component state</div>
        <TodoList
          todoItems={todoItems}
          removeTask={this.removeTask}
          changeTaskStatus={this.changeTaskStatus}
        />
        <div>
          <p className="task-quantity">Tasks in list: {todoItems.length}</p>
          <p className="task-quantity">
            Done:{" "}
            {todoItems.reduce(
              (sum, item) => (item.completed ? sum + 1 : sum),
              0
            )}
          </p>
          <p className="task-quantity">
            NOT done:{" "}
            {todoItems.reduce(
              (sum, item) => (!item.completed ? sum + 1 : sum),
              0
            )}
          </p>
        </div>
        <ColorPicker options={colorPickerOptions} />
        <Dropdown />
        <Counter />
      </div>
    );
  }
}

export default App;
