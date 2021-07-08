import "./App.css";
import React, { Component } from "react";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import TodoList from "./components/TodoList";
// import todoItems from "./todoItems.json";
// import colorPickerOptions from "./colorPickerOptions.json";
import Container from "./components/Container";
// import Form from "./components/Form";
import TodoEditor from "./components/TodoEditor";
import FilterTasks from "./components/FilterTasks";
import Modal from "./components/Modal";
// import Tabs from "./components/Tabs";
// import tabItems from "./tabs.json";
// import Clock from "./components/Clock";
import IconBtn from "./components/IconBtn";
import { ReactComponent as AddIcon } from "./icons/add.svg";
// import { response } from "express";
import todoService from "./services/todo-service";

class App extends Component {
  state = {
    todoItems: [],
    filterValue: "",
    showModal: false,
  };

  componentDidMount() {
    // if (localStorage.getItem("toDoList")) {
    //   this.setState({
    //     todoItems: JSON.parse(localStorage.getItem("toDoList")),
    //   });
    // }

    todoService
      .fetchTodoItems()
      .then((todoItems) => {
        this.setState({
          todoItems,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  componentDidUpdate(prevProps, prevState) {
    // if (this.state.todoItems !== prevState.todoItems) {
    //   localStorage.setItem("toDoList", JSON.stringify(this.state.todoItems));
    // }
    // if (this.state.todoItems !== prevState.todoItems) {
    //   axios.(" http://localhost:3000/toDoList");
    // }
  }

  removeTask = (taskId) => {
    todoService
      .removeItem(taskId)
      .then(() => {
        this.setState((prevState) => ({
          todoItems: prevState.todoItems.filter((item) => item.id !== taskId),
        }));
      })
      .catch(console.log);
  };

  changeTaskStatus = (taskId) => {
    const newStatus = this.state.todoItems.find(({ id }) => id === taskId);

    const dataToUpdate = {
      completed: !newStatus.completed,
    };

    todoService.changeItem(taskId, dataToUpdate).then((data) => {
      this.setState((prevState) => ({
        todoItems: prevState.todoItems.map((item) =>
          item.id === data.id ? data : item
        ),
      }));
    });
  };

  formSubmit = (data) => {
    console.log(data);
  };

  addTaskToList = (data) => {
    const newItem = {
      text: data,
      completed: false,
    };

    todoService.addTask(newItem).then((item) => {
      this.setState(({ todoItems }) => ({ todoItems: [...todoItems, item] }));

      this.toggleModal();
    });

    // this.setState((prevState) => {
    //   return {
    //     todoItems: [
    //       ...prevState.todoItems,
    //       {
    //         id:
    //           prevState.todoItems.length !== 0
    //             ? `id-${
    //                 Number(
    //                   prevState.todoItems[prevState.todoItems.length - 1].id[3]
    //                 ) + 1
    //               }`
    //             : "id-1",
    //         text: data,
    //         completed: false,
    //       },
    //     ],
    //   };
    // });
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
          <h1>Component state</h1>
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

          {/* <Form onSubmitForm={this.formSubmit} /> */}

          <div className="btnBox">
            <IconBtn onClick={this.toggleModal} aria-label="Add task to list">
              <AddIcon width="30px" height="30px" fill="green" />
            </IconBtn>
          </div>
          {this.state.todoItems.length > 0 ? (
            <TodoList
              todoItems={this.getFilteredTasks()}
              removeTask={this.removeTask}
              changeTaskStatus={this.changeTaskStatus}
              filter={this.state.filterValue}
            />
          ) : (
            <span>Loading...</span>
          )}
          <div className="tasksBox">
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
          {/* <button type="button" onClick={this.toggleModal}>
            Show modal
          </button> */}
        </Container>
      </div>
    );
  }
}

export default App;
