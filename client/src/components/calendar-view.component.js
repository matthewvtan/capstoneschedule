import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interaction from "@fullcalendar/interaction";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

export default class CalendarView extends Component {
  state = {
    modal: false,
    event: {
      title: "",
      start: new Date()
    }
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };

  render() {
    return (
      <div id="calendar" className="container" ref="calendar">
        <FullCalendar
          header={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth, listWeek"
          }}
          selectable={true}
          plugins={[interaction, dayGridPlugin]}
          themeSystem="bootstrap"
          weekends={false}
          displayEventTime={true}
          timeZone="UTC"
          events="https://www.evening-hollows-87113.com/events"
          eventRender={this.handleEventRender}
          eventClick={this.handleEventClick}
        />
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            {this.state.event.title}
          </ModalHeader>
          <ModalBody>
            <div>
              <p>{this.state.event.start.toISOString()}</p>
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
    );
  }
}



// import React from "react";
// // import { Link } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import axios from 'axios';
// import "../main.scss";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

// // const Links = props => (
// // <Link to={"/edit/"+props.links._id} />
// // )

// export default class CalendarView extends React.Component {
//   // Added this:
//   constructor(props) {
//     super(props);

//     // Assign state itself, and a default value for items
//     this.state = {
//       modal: false,
//       calendarWeekends: true,
//       calendarEvents: []
//     };
//   }
      
// componentWillMount() {
//     axios.get('/events')
//       .then(response => {
//         this.setState({calendarEvents: response.data})
//         console.log({calendarEvents: response.data})
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }

//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };

//   handleEventClick = ({ calendarEvent, el }) => {
//     this.toggle();
//     this.setState({ calendarEvent });
//     console.log(this.state.calendarEvents.title);
//   };
//   // componentDidUpdate() {
//   //   axios.get('/events')
//   //     .then(response => {
//   //       this.setState({calendarEvents: response.data})
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     })
//   // }

//   // eventLinks() {
//   //   return this.state.calendarEvents.map(function(currentEvent, i) {
//   //     return <Links links={currentEvent} key={i} />
//   //   });
//   // }

//   render() {
//     return (
//       <div className="cal-container">
//         <div style={{marginTop: 30}}>
//           <FullCalendar
//             defaultView="timeGridDay"
//             header={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
//             }}
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
//             ref={this.calendarComponentRef}
//             weekends={this.state.calendarWeekends}
//             events={this.state.calendarEvents}
//             eventClick={this.handleEventClick}
//             nowIndicator='true'
//             navLinks={true}
//             height='parent'
//           />
//           <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={this.toggle}>
//             Event Title: {this.state.calendarEvents.title}
//           </ModalHeader>
//           <ModalBody>
//             <div>
//               <p>Date and Time</p>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary">Do Something</Button>{" "}
//             <Button color="secondary" onClick={this.toggle}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//         </div>
//       </div>
//     );
//   }

//   // handleEventClick = arg => {
//   //   alert("event id: "+this.state.eventId);
//   //   console.log("Event ID: "+this.state.calendarEvents);
//   // }
// }
