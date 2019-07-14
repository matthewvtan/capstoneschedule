import React from "react";
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
      title: '',
      start: '',
      end: '',
      job_address: ''
    }
  };
      
componentDidMount() {
    axios.get('/events')
      .then(response => {
        this.setState({event: response.data})
        console.log({event: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    // this.setState({ event });
    console.log("Event Clicked");
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
            events={this.state.event}
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
            {this.state.event.title}
          </ModalHeader>
          <ModalBody>
            <div>
              <p>{this.state.event.job_address}</p>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"><a href="https://evening-hollows-87113.herokuapp.com/list">View Order List</a></Button>{" "}
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
