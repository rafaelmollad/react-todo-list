import React from "react";

import Calendar from "../../components/Calendar/Calendar.component";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";

const Navbar = (props) => {
  console.log(props);

  return (
    <div className="nav-bar-container">
      <nav>
        <div className="left-container">
          <Calendar />

          <span className="tasks-message">
            {props.match.url === "/" && props.match.isExact === true
              ? `You have ${props.todos.length} active ${
                  props.todos.length === 1 ? "task" : "tasks"
                }`
              : `You have completed ${props.completeTodos.length} ${
                  props.completeTodos.length === 1 ? "task" : "tasks"
                }`}
          </span>
        </div>
        <ul className="menu">
          <li className="menu-item">
            <NavLink exact to="/" activeClassName="selected">
              Incomplete tasks
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/completeTasksPage" activeClassName="selected">
              Completed tasks
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    completeTodos: state.completeTodos,
  };
};

export default compose(connect(mapStateToProps), withRouter)(Navbar);
