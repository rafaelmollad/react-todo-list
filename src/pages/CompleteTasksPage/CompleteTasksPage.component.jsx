import React, { Component } from "react";

import { connect } from "react-redux";

import TodoList from "../../components/TodoList/TodoList.component";

class CompleteTasksPage extends Component {
  render() {
    return (
      <div>
        <TodoList todos={this.props.completeTodos} />
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
