import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashRestoreAlt } from "@fortawesome/free-solid-svg-icons";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { deleteTodo, recoverTodo } from "../../actions/todoActions";

class Todo extends Component {
  handleChange = (e) => {
    if (e.target.checked) {
      setTimeout(() => this.props.deleteTodo(this.props.id), 600);
    }

    return;
  };

  handleClick = () => {
    this.props.recoverTodo(this.props.id);
  };

  render() {
    console.log(this.props);
    const { todo, id } = this.props;
    return (
      <div>
        {this.props.match.url === "/completeTasksPage" ? (
          <FontAwesomeIcon
            icon={faTrashRestoreAlt}
            onClick={this.handleClick}
          />
        ) : (
          <input type="checkbox" id={id} onChange={this.handleChange} />
        )}
        <label htmlFor={id}>{todo ? todo : "Todo"}</label>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteTodo: (id) => dispatch(deleteTodo(id)),
    recoverTodo: (id) => dispatch(recoverTodo(id)),
  };
};

export default compose(connect(null, mapDispatchToProps), withRouter)(Todo);
