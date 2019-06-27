import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import CreateEvent from "./components/create-event.component";
import EditEvent from "./components/edit-event.component";
import EventsList from "./components/events-list.component";
import CompleteOrder from "./components/complete-order.component";
import CalendarView from "./components/calendar-view.component";
import ExportView from "./components/export-view.component";
import NavBar from "./components/nav-bar.component";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container" style={{ margin: 0, padding: 0}}>
          <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1, maximum-scale=1, user-scalable=0"/>
          <NavBar />
            <Route path="/" exact component={EventsList} />
            <Route path="/edit/:id" component={EditEvent} />
            <Route path="/complete/:id" component={CompleteOrder} />
            <Route path="/create" component={CreateEvent} />
            <Route path="/calendar" component={CalendarView} />
            <Route path="/export" component={ExportView} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

