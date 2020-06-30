import React, { Component } from "react";

import { connect } from "react-redux";

import AddTodo from "../../components/AddTodo/AddTodo.component";
import TodoList from "../../components/TodoList/TodoList.component";
import emptyList from "../../assets/images/emptyList.png";

class HomePage extends Component {
  render() {
    return (
      <div className="home-page-container">
        <AddTodo />
        {this.props.todos.length > 0 ? (
          <TodoList todos={this.props.todos} />
        ) : (
          <div className="empty-list-container">
            <img src={emptyList} alt="Empty list image" />
          </div>
        )}
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
