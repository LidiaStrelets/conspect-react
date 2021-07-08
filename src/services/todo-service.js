import axios from "axios";

const fetchTodoItems = () =>
  axios
    .get(" http://localhost:3000/toDoList")
    .then((response) => response.data);

const removeItem = (id) => axios.delete(`http://localhost:3000/toDoList/${id}`);

const changeItem = (id, update) =>
  axios
    .patch(`http://localhost:3000/toDoList/${id}`, update)
    .then((response) => response.data);

const addTask = (newTask) =>
  axios
    .post("http://localhost:3000/toDoList", newTask)
    .then((response) => response.data);

const api = {
  fetchTodoItems,
  removeItem,
  changeItem,
  addTask,
};

export default api;
