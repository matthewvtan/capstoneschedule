import React from "react";
import { Link } from "react-router-dom";
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

const Events = props => (
<Link to={"/edit/"+props.events._id} />
)

export default class CalendarView extends React.Component {
  calendarComponentRef = React.createRef();

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      calendarWeekends: true,
      events: []
    };
  }
      
componentDidMount() {
    axios.get('/events')
      .then(response => {
        this.setState({events: response.data})
        console.log({events: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  // toggle = () => {
  //   this.setState({ modal: !this.state.modal });
  // };

  // handleEventClick = ({ events, el }) => {
  //   this.toggle();
  //   this.setState({ events });
  // };

  // componentDidUpdate() {
  //   axios.get('/events')
  //     .then(response => {
  //       this.setState({events: response.data})
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })
  // }

  eventLinks() {
    return this.state.events.map(function(currentEvent, i) {
      return <Events events={currentEvent} key={i} />
    });
  }

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
            events={this.state.events}
            url='https://evening-hollows-87113.herokuapp.com/list'
            // eventClick={this.handleEventClick}
            nowIndicator='true'
            navLinks={true}
            height='parent'
          />
          {/* <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Event Title
          </ModalHeader>
          <ModalBody>
            <div>
              <p>{this.eventLinks}</p>
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
      </div> */}
    );
  }

  // handleEventClick = arg => {
  //   alert("event id: "+this.state.eventId);
  //   console.log("Event ID: "+this.state.events);
  // }
}
