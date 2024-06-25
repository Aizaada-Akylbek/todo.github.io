import React, { Component } from "react";
import AppHeader from "./components/appHeader/AppHeader";
import SearchTodo from "./components/searchTodo/SearchTodo";
import TodoList from "./components/todoList/TodoList";
import TodoAdd from "./components/todoAdd/TodoAdd";

export default class App extends Component {
  state = {
    todoData: [
      { title: "Learn React", id: 1, done: false, important: false },
      { title: "Learn Redux", id: 2, done: false, important: false },
      { title: "Learn Typescript", id: 3, done: false, important: false },
      { title: "Learn Angular", id: 4, done: false, important: false },
    ],
    status: "all", //active, done
    searchText: "",
  };
  filter = (array, status) => {
    switch (status) {
      case "all":
        return array;
      case "active":
        return array.filter((el) => !el.done);
      case "done":
        return array.filter((el) => el.done);
      default:
        return array;
    }
  };
  setStatus = (statusName) => {
    this.setState({ status: statusName });
  };
  search = (array, text) => {
    return array.filter((el) =>
      el.title.toLowerCase().includes(text.toLowerCase())
    );
  };

  setSearch = (e) => {
    console.log(e);
    this.setState({ searchText: e.target.value });
  };
  delTodo = (id) => {
    const newTodoData = this.state.todoData.filter((el) => el.id !== id);
    this.setState({ todoData: newTodoData });
  };
  addTodo = (text) => {
    const ids = this.state.todoData.map((el) => el.id);
    const newTodo = {
      title: text,
      done: false,
      important: false,
      id: ids.at(-1) + 1 || 1,
    };
    this.setState({ todoData: [...this.state.todoData, newTodo] });
  };

  importantTodo = (id) => {
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const todo = this.state.todoData[index];
    const updTodo = { ...todo, important: !todo.important };
    this.setState({ todoData: [...before, updTodo, ...after] });
  };
  doneTodo = (id) => {
    const index = this.state.todoData.findIndex((el) => el.id === id);
    const before = this.state.todoData.slice(0, index);
    const after = this.state.todoData.slice(index + 1);
    const todo = this.state.todoData[index];
    const updTodo = { ...todo, done: !todo.done };
    this.setState({ todoData: [...before, updTodo, ...after] });
  };
  editTodo = (id) => {
    console.log(id);
    const element = this.state.todoData.find((el) => el.id === id);
    console.log(element);
  };
  render() {
    const done = this.state.todoData.filter((el) => el.done).length;
    const active = this.state.todoData.length - done;

    const todos = this.search(
      this.filter(this.state.todoData, this.state.status),
      this.state.searchText
    );
    return (
      <div style={{ width: "500px", margin: "0 auto" }}>
        <AppHeader done={done} active={active} />
        <SearchTodo
          searchText={this.state.searchText}
          onSetStatus={this.setStatus}
          status={this.state.status}
          onSetSearch={this.setSearch}
        />
        <TodoList
          todos={todos}
          onDelTodo={this.delTodo}
          onImpTodo={this.importantTodo}
          onDoneTodo={this.doneTodo}
          onEditTodo={this.editTodo}
        />
        <TodoAdd onAddTodo={this.addTodo} />
      </div>
    );
  }
}
