import React from "react";
import HomePage from "./pages/HomePage/HomePage.component";
import Navbar from "./components/Navbar/Navbar.component";
import CompleteTasksPage from "./pages/CompleteTasksPage/CompleteTasksPage.component";

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/completeTasksPage" component={CompleteTasksPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
