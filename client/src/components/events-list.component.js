import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import "./App.css";
import Table from "./Table";
import axios from 'axios';
import orderBy from 'lodash/orderBy';

const invertDirection = {
  asc: 'desc',
  desc: 'asc'
};

class EventsList extends Component {
  state = {
    data: [],
    editIdx: -1,
    sortDirection: 'desc'
  };

    componentWillMount() {
      axios.get('/events')
        .then(response => {
          this.setState({data: response.data})
          console.log({data: response.data})
          console.log("Component Will Mount")
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

      handleSort = columnName => {
      this.setState(state => ({
        columnToSort: columnName,
        sortDirection: state.columnToSort === columnName 
        ? invertDirection[state.sortDirection]
        : 'asc'
      }));
    }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })}
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            data={orderBy(
                      this.state.events, 
                      this.state.columnToSort,
                      this.state.sortDirection
                    )}
            header={[
              {
                name: "Client Name",
                prop: "title"
              },
              {
                name: "Phone Number",
                prop: "phone"
              },
              {
                name: "Email Address",
                prop: "email_address"
              },
              {
                name: "Date/Time",
                prop: "start"
              },
              {
                name: "End Time",
                prop: "end"
              },
              {
                name: "Work Requested",
                prop: "work_requested"
              },
              {
                name: "Date Repaired",
                prop: "date_repaired"
              },
              {
                name: "Performed By",
                prop: "performed_by"
              },
              {
                name: "Repairs Performed",
                prop: "repairs_performed"
              },
              {
                name: "Labor",
                prop: "labor"
              },
              {
                name: "Hours",
                prop: "hours"
              },
              {
                name: "Materials Used",
                prop: "materials"
              },
              {
                name: "Room",
                prop: "room"
              },
              {
                name: "Status",
                prop: "completed"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default EventsList;








// - - - - - - - - - - - - - - - STABLE CODE BELOW, NO SORTING








// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import moment from 'moment';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import orderBy from 'lodash/orderBy';
// import '../App.css';

// const Event = props => (
//   <TableRow>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.start).format("MM/DD/YYYY hh:mm a")}</TableCell>
//     <TableCell>
//         <Link to={"/complete/"+props.event._id}>Complete</Link>
//     </TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.title}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.phone}</TableCell>
//     {/* <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.email_address}</TableCell> */}
//     <TableCell className={props.event.completed ? 'completed' : ''}><a href={"https://www.google.com/maps/search/?api=1&query="+props.event.job_address}>{props.event.job_address}</a></TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.employee}</TableCell>
//     {/* <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.end).format("MM/DD/YYYY hh:mm a")}</TableCell> */}
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.work_requested}</TableCell>
//     {/* <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY")}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.performed_by}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.repairs_performed}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.labor}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.hours}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.materials}</TableCell>
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.room}</TableCell> */}
//     <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.completed ? 'Complete' : 'Incomplete'}</TableCell>
//     <TableCell>
//         <Link to={"/edit/"+props.event._id}>Edit</Link>
//     </TableCell>
//   </TableRow>
// )

// const invertDirection = {
//   asc: 'desc',
//   desc: 'asc'
// };

// export default class EventsList extends Component {
  
//     constructor(props) {
//       super(props);
//       this.state = {
//         events: [],
//         columnToSort: '',
//         sortDirection: 'desc'
//       };
//     }
    
//     componentDidMount() {
//       axios.get('/events')
//         .then(response => {
//           this.setState({events: response.data})
//           console.log({events: response.data})
//           console.log("Component Did Mount")
//         })
//         .catch(function (error) {
//           console.log(error);
//         })
//     }
    
//     // shouldComponentUpdate(nextProps, nextState) {
//     //   console.log("Should component update", nextProps, nextState);
//     //   return false;
//     // }

//     // componentDidUpdate() {
//     //   axios.get('/events')
//     //     .then(response => {
//     //       this.setState({events: response.data})
//     //       console.log("Component Did Update")
//     //     })
//     //     .catch(function (error) {
//     //       console.log(error);
//     //     })
//     // }
    
//     eventList() {
//       return this.state.events.map(function(currentEvent, i) {
//         return <Event event={currentEvent} key={i} />
//       });
//     }
    
//     handleSort = columnName => {
//       this.setState(state => ({
//         columnToSort: columnName,
//         sortDirection: state.columnToSort === columnName 
//         ? invertDirection[state.sortDirection]
//         : 'asc'
//       }));
//     }

//     render() {
//         return (
//           <div style={{margin: 20}}>
//             <h3 style={{marginTop: 20}}>Work Orders</h3>
//             <Paper>
//                 <Table 
//                   className="table-responsive table-bordered"
//                   style={{ marginTop: 20}}
//                   handleSort={this.handleSort}
//                   events={orderBy(
//                     this.state.events, 
//                     this.state.columnToSort,
//                     this.state.sortDirection
//                     )}
//                 >
//                   <TableHead>
//                     <TableRow>
//                       <TableCell>Date/Time</TableCell>
//                       <TableCell>Complete</TableCell>
//                       <TableCell>Client Name</TableCell>
//                       <TableCell>Phone</TableCell>
//                       {/* <TableCell>Client Email</TableCell> */}
//                       <TableCell>Job Address</TableCell>
//                       <TableCell>Assignee</TableCell>
//                       {/* <TableCell>End Time</TableCell> */}
//                       <TableCell>Work Requested</TableCell>
//                       {/* <TableCell>Date Repaired</TableCell>
//                       <TableCell>Performed By</TableCell>
//                       <TableCell>Repairs Performed</TableCell>
//                       <TableCell>Labor</TableCell>
//                       <TableCell>Hours</TableCell>
//                       <TableCell>Materials</TableCell>
//                       <TableCell>Room</TableCell> */}
//                       <TableCell>Status</TableCell>
//                       <TableCell>Edit</TableCell>
//                     </TableRow>
//                   </TableHead>
//                     <TableBody>
//                       { this.eventList() }
//                     </TableBody>
//                 </Table>
//             </Paper>
//           </div>
//         )
//     }
// }