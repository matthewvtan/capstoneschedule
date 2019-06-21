import React from "react";
// import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import axios from 'axios';
import "../main.scss";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

// const Links = props => (
// <Link to={"/edit/"+props.links._id} />
// )

export default class CalendarView extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    calendarWeekends: true,
    calendarEvents: []
  };
      
componentDidMount() {
    axios.get('http://localhost:4000/events')
      .then(response => {
        this.setState({calendarEvents: response.data})
        console.log({calendarEvents: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
  componentDidUpdate() {
    axios.get('http://localhost:4000/events')
      .then(response => {
        this.setState({calendarEvents: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // eventLinks() {
  //   return this.state.calendarEvents.map(function(currentEvent, i) {
  //     return <Links links={currentEvent} key={i} />
  //   });
  // }

  render() {
    return (
      <div className="cal-container">
        <div style={{marginTop: 30}}>
          <FullCalendar
            defaultView="timeGridDay"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends={this.state.calendarWeekends}
            events={this.state.calendarEvents}
            // eventClick={this.handleEventClick}
            nowIndicator='true'
            height='parent'
          />
        </div>
      </div>
    );
  }

  // handleEventClick = arg => {
  //   console.log("Event ID: "+this.state.calendarEvents[1]._id);
  // }
}
