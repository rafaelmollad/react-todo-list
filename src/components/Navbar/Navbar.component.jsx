import React from "react";

import Calendar from "../../components/Calendar/Calendar.component";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Calendar />
        <ul>
          <li>
            <Link to="/">Incomplete tasks</Link>
          </li>
          <li>
            <Link to="/completeTasksPage">Complete Tasks</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
