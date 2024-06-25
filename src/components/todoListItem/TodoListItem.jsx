import React, { Component } from "react";
import "./TodoListItem.css";

export default class TodoListItem extends Component {
  render() {
    const { onDone, onImpTodo, onDel, id, title, done, important, onEdit } =
      this.props;
    let clazz = "";
    if (important) {
      clazz += " imp";
    }
    if (done) {
      clazz += " done";
    }

    return (
      <span className="d-flex align-items-center">
        <span className={`flex-grow-1 ${clazz}`} onClick={() => onDone(id)}>
          {title}
        </span>
        <button className=" btn btn-outline-danger" onClick={() => onDel(id)}>
          <i className="bi bi-trash"></i>
        </button>
        <button
          className="btn btn-outline-warning"
          onClick={() => onImpTodo(id)}
        >
          <i className="bi bi-exclamation-triangle"></i>
        </button>
        <button className="btn btn-outline-success" onClick={() => onEdit(id)}>
          <i className="bi bi-pencil"></i>
        </button>
      </span>
    );
  }
}
