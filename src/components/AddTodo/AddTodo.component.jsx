import React, { Component } from "react";

import { connect } from "react-redux";

import CustomButton from "../CustomButton/CustomButton.component";
import { addTodo, updateTodoText } from "../../actions/todoActions";

class AddTodo extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.props.todo, Math.random());
  };

  handleChange = (e) => {
    this.props.updateTodoText(e.target.value);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a task..."
            onChange={this.handleChange}
            value={this.props.todo}
          />
          <CustomButton text="Add Task" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todo: state.todo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (todo, id) => {
      dispatch(addTodo(todo, id));
    },
    updateTodoText: (todo) => {
      dispatch(updateTodoText(todo));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
