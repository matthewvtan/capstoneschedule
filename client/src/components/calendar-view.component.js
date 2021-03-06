import React from "react";
import { Link } from "react-router-dom";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from '@fullcalendar/list';
import { Button } from "reactstrap";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Divider from '@material-ui/core/Divider';
import axios from 'axios';
import "../main.scss";
import "../App.css";

import "@fullcalendar/core/main.css";
import "@fullcalendar/daygrid/main.css";
import "@fullcalendar/timegrid/main.css";

export default class CalendarView extends React.Component {

  constructor(props){
    super(props)
    this.state = {
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
    }
  }

  componentWillMount() {
    
    axios.get('/events')
      .then(response => {
        this.setState({
          events: response.data
        })
        console.log({events: response.data})
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  toggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleEventClick = ({ event, el }) => {
    this.toggle();
    this.setState({ event });
  };

  render() {

    return (
      <div className="cal-container" style={{marginTop: 100}}>
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
{/* - - - - - - - - - - - D I A L O G */}
<Dialog
        open={this.state.open}
        onClose={this.toggle}
        fullWidth="true"
      >
        <DialogTitle>Work Order Details</DialogTitle>
        <Divider />
        <DialogContent>
          <DialogContentText>
            <p className="modalTextHeader">
            Client Name:
            </p>
              <p className="modalText">{this.state.event.title}</p>
            <p className="modalTextHeader">
            Job Address: 
            </p>
              <p className="modalText">
                <a href={"https://www.google.com/maps/search/?api=1&query="+this.state.event.extendedProps.job_address}>{this.state.event.extendedProps.job_address}</a></p>
            <p className="modalTextHeader">
            Phone:
            </p>
              <p className="modalText">
                <a href={"tel:"+this.state.event.extendedProps.phone}>{this.state.event.extendedProps.phone}</a>
              </p>
            <p className="modalTextHeader">
            Email Address: 
            </p>
              <p className="modalText">
                <a href={"mailto:"+this.state.event.extendedProps.email_address}>{this.state.event.extendedProps.email_address}</a>
              </p>
            <p className="modalTextHeader">
            Work Requested:
            </p>
              <p className="modalText">{this.state.event.extendedProps.work_requested}</p>
           </DialogContentText>
          </DialogContent>
          <Divider />
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

// import React from "react";
// import { Link } from "react-router-dom";
// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
// import timeGridPlugin from "@fullcalendar/timegrid";
// import interactionPlugin from "@fullcalendar/interaction";
// import listPlugin from '@fullcalendar/list';
// import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// // import useMediaQuery from '@material-ui/core/useMediaQuery';
// // import { useTheme } from '@material-ui/core/styles';
// // import ListItem from '@material-ui/core/ListItem';
// import Divider from '@material-ui/core/Divider';
// import axios from 'axios';
// import "../main.scss";
// import "../App.css";

// import "@fullcalendar/core/main.css";
// import "@fullcalendar/daygrid/main.css";
// import "@fullcalendar/timegrid/main.css";

// export default class CalendarView extends React.Component {
//   calendarComponentRef = React.createRef();

//   state = {
//     open: false,
//     modal: false,
//     calendarWeekends: true,
//     event: {
//       title: "",
//       start: "",
//       extendedProps: {
//         job_address: "",
//         id: "",
//         work_requested: "",
//         email_address: "",
//         phone: ""
//       }
//     },
//     events: []
//   };

// componentWillMount() {

//     axios.get('/events')
//       .then(response => {
//         this.setState({
//           events: response.data,
//         })
//         console.log({events: response.data})
//       })
//       .catch(function (error) {
//         console.log(error);
//       })
//   }

//   toggle = () => {
//     this.setState({ open: !this.state.open });
//   };

//   handleEventClick = ({ event, el }) => {
//     this.toggle();
//     this.setState({ event });
//   };

//   render() {

//     return (
//       <div className="cal-container" style={{marginTop: 100}}>
//           <FullCalendar
//             defaultView="timeGridDay"
//             header={{
//               left: "prev,next today",
//               center: "title",
//               right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
//             }}
//             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
//             ref={this.calendarComponentRef}
//             weekends="true"
//             events={this.state.events}
//             eventClick={this.handleEventClick}
//             nowIndicator="true"
//             height="parent"
//             selectable="true"
//           />
// {/* - - - - - - - - - - - D I A L O G */}
// <Dialog
//         open={this.state.open}
//         onClose={this.toggle}
//         fullWidth="true"
//       >
//         <DialogTitle>Work Order Details</DialogTitle>
//         <Divider />
//         <DialogContent>
//           <DialogContentText>
//             <p className="modalTextHeader">
//             Client Name:
//             </p>
//               <p className="modalText">{this.state.event.title}</p>
//             <p className="modalTextHeader">
//             Job Address: 
//             </p>
//               <p className="modalText">
//                 <a href={"https://www.google.com/maps/search/?api=1&query="+this.state.event.extendedProps.job_address}>{this.state.event.extendedProps.job_address}</a></p>
//             <p className="modalTextHeader">
//             Phone:
//             </p>
//               <p className="modalText">
//                 <a href={"tel:"+this.state.event.extendedProps.phone}>{this.state.event.extendedProps.phone}</a>
//               </p>
//             <p className="modalTextHeader">
//             Email Address: 
//             </p>
//               <p className="modalText">
//                 <a href={"mailto:"+this.state.event.extendedProps.email_address}>{this.state.event.extendedProps.email_address}</a>
//               </p>
//             <p className="modalTextHeader">
//             Work Requested:
//             </p>
//               <p className="modalText">{this.state.event.extendedProps.work_requested}</p>
//            </DialogContentText>
//           </DialogContent>
//           <Divider />
//         <DialogActions>
//           <Button color="primary">
//             <Link to={"/complete/"+this.state.event.extendedProps._id} style={{color: "white"}}>
//               Complete
//             </Link>
//           </Button>
//           <Button onClick={this.toggle} color="secondary" autoFocus>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>

//     );
//   }
// }





// // - - - - - - - - - - - STABLE CODE BELOW

// // import React from "react";
// // import FullCalendar from "@fullcalendar/react";
// // import dayGridPlugin from "@fullcalendar/daygrid";
// // import timeGridPlugin from "@fullcalendar/timegrid";
// // import interactionPlugin from "@fullcalendar/interaction";
// // import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// // import axios from 'axios';
// // import "../main.scss";

// // import "@fullcalendar/core/main.css";
// // import "@fullcalendar/daygrid/main.css";
// // import "@fullcalendar/timegrid/main.css";

// // export default class CalendarView extends React.Component {
// //   calendarComponentRef = React.createRef();

// //   state = {
// //     modal: false,
// //     calendarWeekends: true,
// //     events: {
// //       title: '',
// //       start: '',
// //       end: '',
// //       job_address: ''
// //     }
// //   };
      
// // componentDidMount() {
// //     axios.get('/events')
// //       .then(response => {
// //         this.setState({events: response.data})
// //         console.log({events: response.data})
// //       })
// //       .catch(function (error) {
// //         console.log(error);
// //       })
// //   }

// //   toggle = () => {
// //     this.setState({ modal: !this.state.modal });
// //   };

// //   handleEventClick = ({ event, el }) => {
// //     this.toggle();
// //     this.setState({ event });
// //   };

// //   render() {
// //     return (
// //       <div className="cal-container">
// //         <div style={{marginTop: 30}}>
// //           <FullCalendar
// //             defaultView="timeGridDay"
// //             header={{
// //               left: "prev,next today",
// //               center: "title",
// //               right: "dayGridMonth,timeGridWeek,timeGridDay,listWeek"
// //             }}
// //             plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
// //             ref={this.calendarComponentRef}
// //             weekends={this.state.calendarWeekends}
// //             events={this.state.events}
// //             eventClick={this.handleEventClick}
// //             nowIndicator='true'
// //             height='parent'
// //           />
// //           <Modal
// //           isOpen={this.state.modal}
// //           toggle={this.toggle}
// //         >
// //           <ModalHeader toggle={this.toggle}>
// //             Event Title: {this.state.events.title}
// //           </ModalHeader>
// //           <ModalBody>
// //             <div>
// //               <a href="https://evening-hollows-87113.herokuapp.com/list">View Order List</a>
// //               <br />
// //               <p>{this.state.events.title}</p>
// //             </div>
// //           </ModalBody>
// //           <ModalFooter>
// //             <Button color="primary">Complete</Button>{" "}
// //             <Button color="secondary" onClick={this.toggle}>
// //               Cancel
// //             </Button>
// //           </ModalFooter>
// //         </Modal>
// //         </div>
// //       </div>
// //     );
// //   }
// // }
