import React, { Component } from "react";

export default class SearchTodo extends Component {
  btns = [
    { name: "all", title: "All" },
    { name: "active", title: "Active" },
    { name: "done", title: "Done" },
  ];
  render() {
    const buttons = this.btns.map((el) => {
      const active = this.props.status === el.name;
      const clazz = active ? "btn-info" : "btn-outline-secondary";

      return (
        <button
          key={el.name}
          onClick={() => this.props.onSetStatus(el.name)}
          className={`btn ${clazz}`}
        >
          {el.title}
        </button>
      );
    });
    return (
      <div className="d-flex">
        <input
          type="text"
          className="form-control"
          value={this.props.searchText}
          onChange={this.props.onSetSearch}
        />
        {buttons}

        {/* <button className="btn btn-info">All</button>
        <button className="btn btn-outline-secondary">Active</button>
        <button className="btn btn-outline-secondary">Done</button> */}
      </div>
    );
  }
}
