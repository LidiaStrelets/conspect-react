import "./App.css";
import React, { Component } from "react";
import Counter from "./components/Counter";
import Dropdown from "./components/Dropdown";
import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
// import todoItems from "./todoItems.json";
import colorPickerOptions from "./colorPickerOptions.json";
import Container from "./components/Container";
import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor";
import FilterTasks from "./components/FilterTasks";
import Modal from "./components/Modal";
import Tabs from "./components/Tabs";
import tabItems from "./tabs.json";
// import Clock from "./components/Clock";
import IconBtn from "./components/IconBtn";
import { ReactComponent as AddIcon } from "./icons/add.svg";

class App extends Component {
  state = {
    todoItems: [],
    filterValue: "",
    showModal: false,
  };

  componentDidMount() {
    if (localStorage.getItem("toDoList")) {
      this.setState({
        todoItems: JSON.parse(localStorage.getItem("toDoList")),
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.todoItems !== prevState.todoItems) {
      // console.log("tasks updated");
      localStorage.setItem("toDoList", JSON.stringify(this.state.todoItems));
    }
  }

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
      console.log(prevState);
      return {
        todoItems: [
          ...prevState.todoItems,
          {
            id:
              prevState.todoItems.length !== 0
                ? `id-${
                    Number(
                      prevState.todoItems[prevState.todoItems.length - 1].id[3]
                    ) + 1
                  }`
                : "id-1",
            text: data,
            completed: false,
          },
        ],
      };
    });
    this.toggleModal();
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

  toggleModal = (event) => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { todoItems, showModal } = this.state;

    return (
      <div className="App">
        <Container>
          {/* <Tabs items={tabItems} /> */}
          {/* {showModal && <Clock />} */}
          {showModal && (
            <Modal toggleModal={this.toggleModal}>
              <TodoEditor addTask={this.addTaskToList} />
            </Modal>
          )}
          <FilterTasks
            value={this.state.filterValue}
            handleFilter={this.handleFilter}
          />

          <Form onSubmitForm={this.formSubmit} />
          <div>Component state</div>
          <IconBtn onClick={this.toggleModal} aria-label="Add task to list">
            <AddIcon width="30px" height="30px" fill="green" />
          </IconBtn>
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
          <ColorPicker options={colorPickerOptions} />
          <Dropdown />
          <Counter />
          {/* <button type="button" onClick={this.toggleModal}>
            Show modal
          </button> */}
        </Container>
      </div>
    );
  }
}

export default App;
