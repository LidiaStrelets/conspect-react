import "./App.css";
import React, { Component } from "react";
import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
import todoItems from "./todoItems.json";
// import colorPickerOptions from "./colorPickerOptions.json";
import Container from "./components/Container";
// import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor";
import FilterTasks from "./components/FilterTasks";

class App extends Component {
  state = {
    todoItems,
    filterValue: "",
  };

  removeTask = (taskId) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.filter((item) => item.id !== taskId),
    }));
  };

  changeTaskStatus = (index) => {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.map((item, idx) =>
        idx === index ? { ...item, completed: !item.completed } : item
      ),
    }));
  };

  formSubmit = (data) => {
    console.log(data);
  };

  addTaskToList = (data) => {
    this.setState((prevState) => {
      console.log();
      return {
        todoItems: [
          ...prevState.todoItems,
          {
            id: `id-${
              Number(
                prevState.todoItems[prevState.todoItems.length - 1].id[3]
              ) + 1
            }`,
            text: data,
            completed: false,
          },
        ],
      };
    });
  };

  handleFilter = (event) => {
    this.setState({ filterValue: event.currentTarget.value });
  };
  getFilteredTasks = () => {
    const { todoItems, filterValue } = this.state;

    const normalizedFilter = filterValue.toLocaleLowerCase();
    return todoItems.filter((item) =>
      item.text.toLocaleLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { todoItems, filterValue } = this.state;

    return (
      <div className="App">
        <Container>
          <FilterTasks
            value={this.state.filterValue}
            handleFilter={this.handleFilter}
          />
          <TodoEditor addTask={this.addTaskToList} />
          {/* <Form onSubmitForm={this.formSubmit} /> */}
          <div>Component state</div>
          <TodoList
            todoItems={this.getFilteredTasks()}
            removeTask={this.removeTask}
            changeTaskStatus={this.changeTaskStatus}
            filter={this.state.filterValue}
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
          {/* <ColorPicker options={colorPickerOptions} /> */}
          {/* <Dropdown /> */}
          {/* <Counter /> */}
        </Container>
      </div>
    );
  }
}

export default App;
