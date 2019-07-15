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

export default class CalendarView extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    modal: false,
    calendarWeekends: true,
    event: {
      title: "",
      start: "",
      extendedProps: {
        job_address: "",
        id: "",
        work_requested: "",
        email_address: "",
        phone: ""
      }
    },
    events: []
  };
      
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

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    console.log(`Address: ${this.state.event.extendedProps.job_address}`);
    this.toggle();
    this.setState({ event });
  };

  render() {
    return (
      <div className="cal-container" style={{marginTop: 30}}>
          <FullCalendar
            defaultView="timeGridDay"
            header={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
            }}
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            ref={this.calendarComponentRef}
            weekends="true"
            events={this.state.events}
            eventClick={this.handleEventClick}
            nowIndicator="true"
            height="parent"
            selectable="true"
          />
          <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Work Order Details
          </ModalHeader>
          <ModalBody>
            <div>
              <p>Client Name: {this.state.event.title}</p>
              <br />
              <p>Job Address: <a href={"https://www.google.com/maps/search/?api=1&query="+this.state.event.extendedProps.job_address}>{this.state.event.extendedProps.job_address}</a></p>
              <br />
              <p>Phone: {this.state.event.extendedProps.phone}</p>
              <br />
              <p>Email Address: {this.state.event.extendedProps.email_address}</p>
              <br />
              <p>Work Requested: {this.state.event.extendedProps.work_requested}</p>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"><Link to={"/complete/"+this.state.event.extendedProps.id}>Complete</Link></a></Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}





// - - - - - - - - - - - STABLE CODE BELOW

// import React from "react";
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

// export default class CalendarView extends React.Component {
//   calendarComponentRef = React.createRef();

//   state = {
//     modal: false,
//     calendarWeekends: true,
//     events: {
//       title: '',
//       start: '',
//       end: '',
//       job_address: ''
//     }
//   };
      
// componentDidMount() {
//     axios.get('/events')
//       .then(response => {
//         this.setState({events: response.data})
//         console.log({events: response.data})
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }

//   toggle = () => {
//     this.setState({ modal: !this.state.modal });
//   };

//   handleEventClick = ({ event, el }) => {
//     this.toggle();
//     this.setState({ event });
//   };

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
//             events={this.state.events}
//             eventClick={this.handleEventClick}
//             nowIndicator='true'
//             height='parent'
//           />
//           <Modal
//           isOpen={this.state.modal}
//           toggle={this.toggle}
//         >
//           <ModalHeader toggle={this.toggle}>
//             Event Title: {this.state.events.title}
//           </ModalHeader>
//           <ModalBody>
//             <div>
//               <a href="https://evening-hollows-87113.herokuapp.com/list">View Order List</a>
//               <br />
//               <p>{this.state.events.title}</p>
//             </div>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary">Complete</Button>{" "}
//             <Button color="secondary" onClick={this.toggle}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//         </div>
//       </div>
//     );
//   }
// }
