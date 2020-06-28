import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodo from "../../components/AddTodo/AddTodo.component";
import TodoList from "../../components/TodoList/TodoList.component";

class HomePage extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <AddTodo />
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps)(HomePage);
