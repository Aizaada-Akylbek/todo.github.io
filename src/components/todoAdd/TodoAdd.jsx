import React, { Component } from "react";

export default class TodoAdd extends Component {
  state = {
    inputText: "",
  };
  setInputText = (event) => {
    this.setState({ inputText: event.target.value });
  };
  render() {
    return (
      <div className="d-flex">
        <input
          value={this.state.inputText}
          onChange={this.setInputText}
          type="text"
          className="form-control"
          placeholder="enter new todo"
        />
        <button
          className="btn btn-info"
          onClick={() => {
            if (this.state.inputText.trim()) {
              this.props.onAddTodo(this.state.inputText);
            }
            this.setState({ inputText: "" });
          }}
        >
          add
        </button>
      </div>
    );
  }
}
