import React from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from '@fullcalendar/list';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import "../main.scss";
import "../App.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class CalendarView extends React.Component {
  calendarComponentRef = React.createRef();

  state = {
    open: false,
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
    // this.setState({ modal: !this.state.modal });
    this.setState({ open: !this.state.open });
  };

  handleEventClick = ({ event, el }) => {
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
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
            ref={this.calendarComponentRef}
            weekends="true"
            events={this.state.events}
            eventClick={this.handleEventClick}
            nowIndicator="true"
            height="parent"
            selectable="true"
          />
          {/* <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <ModalHeader toggle={this.toggle}>
            Work Order Details
          </ModalHeader>
          <ModalBody>
            <div>
              <br />
              <p className="modalText">Client Name: {this.state.event.title}</p>
              <br />
              <p className="modalText">Job Address: <a href={"https://www.google.com/maps/search/?api=1&query="+this.state.event.extendedProps.job_address}>{this.state.event.extendedProps.job_address}</a></p>
              <br />
              <p className="modalText">Phone: {this.state.event.extendedProps.phone}</p>
              <br />
              <p className="modalText">Email Address: {this.state.event.extendedProps.email_address}</p>
              <br />
              <p className="modalText">Work Requested: {this.state.event.extendedProps.work_requested}</p>
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="primary"><Link to={"/complete/"+this.state.event.extendedProps._id} style={{color: "white"}}>Complete</Link></Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal> */}

{/* - - - - - - - - - - - D I A L O G */}
<Dialog
        open={this.state.open}
        onClose={this.toggle}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">Work Order Details</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <ListSubheader>
            Client Name:
            </ListSubheader>
            <ListItem>
              <p className="modalText">{this.state.event.title}</p>
            </ListItem>
            <ListSubheader>
            Job Address: 
            </ListSubheader>
            <ListItem>
              <p className="modalText"><a href={"https://www.google.com/maps/search/?api=1&query="+this.state.event.extendedProps.job_address}>{this.state.event.extendedProps.job_address}</a></p>
            </ListItem>
            <ListSubheader>
            Phone:
            </ListSubheader>
            <ListItem>
              <p className="modalText">{this.state.event.extendedProps.phone}</p>
            </ListItem>
            <ListSubheader>
            Email Address: 
            </ListSubheader>
            <ListItem>
              <p className="modalText">{this.state.event.extendedProps.email_address}</p>
            </ListItem>
            <ListSubheader>
            Work Requested:
            </ListSubheader>
            <ListItem>
              <p className="modalText">{this.state.event.extendedProps.work_requested}</p>
            </ListItem>
           </DialogContentText>
          </DialogContent>
        <DialogActions>
          <Button color="primary">
            <Link to={"/complete/"+this.state.event.extendedProps._id} style={{color: "white"}}>
              Complete
            </Link>
          </Button>
          <Button onClick={this.toggle} color="secondary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
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
