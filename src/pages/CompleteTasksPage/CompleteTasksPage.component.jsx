import React, { Component } from "react";

import { connect } from "react-redux";

import TodoList from "../../components/TodoList/TodoList.component";
import emptyListTwo from "../../assets/images/emptyListTwo.png";

class CompleteTasksPage extends Component {
  render() {
    return (
      <div className="complete-tasks-container">
        {this.props.completeTodos.length > 0 ? (
          <TodoList todos={this.props.completeTodos} />
        ) : (
          <div className="empty-list-container">
            <img src={emptyListTwo} alt="Woman" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    completeTodos: state.completeTodos,
  };
};

export default connect(mapStateToProps)(CompleteTasksPage);
