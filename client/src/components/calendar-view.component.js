import React from "react";
// import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
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
    modal: false,
    calendarWeekends: true,
    calendarEvents: []
  };
      
componentDidMount() {
    axios.get('/events')
      .then(response => {
        this.setState({calendarEvents: response.data})
        console.log({calendarEvents: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ calendarEvent, el }) => {
    this.toggle();
    this.setState({ calendarEvent });
    console.log(this.state.calendarEvent.title);
  };
  // componentDidUpdate() {
  //   axios.get('/events')
  //     .then(response => {
  //       this.setState({calendarEvents: response.data})
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

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
            eventClick={this.handleEventClick}
            nowIndicator='true'
            navLinks={true}
            height='parent'
          />
          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Event Title
          </ModalHeader>
          <ModalBody>
            <div>
              <a href="https://evening-hollows-87113.herokuapp.com/list">View Order List</a>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary">Do Something</Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
        </div>
      </div>
    );
  }

  // handleEventClick = arg => {
  //   alert("event id: "+this.state.eventId);
  //   console.log("Event ID: "+this.state.calendarEvents);
  // }
}
