import React, { Component } from "react";

import moment from "moment";

class Calendar extends Component {
  state = {
    date: "",
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    const date = moment().format("dddd, MMMM D");
    this.setState({ date });
  };

  render() {
    return (
      <div className="date">
        <p>{this.state.date}</p>
      </div>
    );
  }
}

export default Calendar;
