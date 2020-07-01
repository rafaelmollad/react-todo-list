import React, { Component } from "react";

import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CornerUpLeft } from "react-feather";
import { Delete } from "react-feather";

import {
  markAsComplete,
  recoverTodo,
  deleteTodo,
} from "../../actions/todoActions";

class Todo extends Component {
  handleChange = (e) => {
    if (e.target.checked) {
      setTimeout(() => this.props.markAsComplete(this.props.id), 600);
    }

    return;
  };

  handleRecoverClick = () => {
    this.props.recoverTodo(this.props.id);
  };

  handleDeleteClick = () => {
    if (this.props.match.url === "/completeTasksPage") {
      this.props.deleteTodo(this.props.id, "completeTodos");
    } else {
      this.props.deleteTodo(this.props.id, "todos");
    }
  };

  render() {
    const { todo, id } = this.props;
    return (
      <div className="todo">
        {this.props.match.url === "/completeTasksPage" ? (
          <CornerUpLeft
            className="undo-icon"
            onClick={this.handleRecoverClick}
          />
        ) : (
          <input type="checkbox" id={id} onChange={this.handleChange} />
        )}

        <label
          className={
            this.props.match.url === "/completeTasksPage"
              ? ""
              : "incomplete-label"
          }
          htmlFor={id}
        >
          {todo ? todo : "Todo"}
        </label>

        <Delete className="delete-icon" onClick={this.handleDeleteClick} />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    markAsComplete: (id) => dispatch(markAsComplete(id)),
    recoverTodo: (id) => dispatch(recoverTodo(id)),
    deleteTodo: (id, listName) => dispatch(deleteTodo(id, listName)),
  };
};

export default compose(connect(null, mapDispatchToProps), withRouter)(Todo);
