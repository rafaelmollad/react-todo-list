import React from "react";

import Calendar from "../../components/Calendar/Calendar.component";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-bar-container">
      <nav>
        <Calendar />
        <ul className="menu">
          <li className="menu-item">
            <NavLink exact to="/" activeClassName="selected">
              Incomplete tasks
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/completeTasksPage" activeClassName="selected">
              Complete Tasks
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
