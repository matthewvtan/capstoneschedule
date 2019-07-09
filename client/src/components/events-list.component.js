import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../App.css';
import 'typeface-roboto';

const Event = props => (
  <TableRow>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.title}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.phone}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.email_address}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}><a href={"https://www.google.com/maps/search/?api=1&query="+props.event.job_address}>{props.event.job_address}</a></TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.start).format("MM/DD/YYYY hh:mm a")}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.end).format("MM/DD/YYYY hh:mm a")}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.work_requested}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY")}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.performed_by}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.repairs_performed}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.labor}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.hours}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.materials}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.room}</TableCell>
    <TableCell>
        <Link to={"/edit/"+props.event._id}>Edit</Link>
    </TableCell>
    <TableCell>
        <Link to={"/complete/"+props.event._id}>Complete</Link>
    </TableCell>
  </TableRow>
)

export default class EventsList extends Component {

    constructor(props) {
      super(props);
      this.state = {events: []};
    }
    
    componentDidMount() {
      axios.get('/events')
        .then(response => {
          this.setState({events: response.data})
          console.log({events: response.data})
          console.log("Component Did Mount")
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
    // shouldComponentUpdate(nextProps, nextState) {
    //   console.log("Should component update", nextProps, nextState);
    //   return false;
    // }

    // componentDidUpdate() {
    //   axios.get('/events')
    //     .then(response => {
    //       this.setState({events: response.data})
    //       console.log("Component Did Update")
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    // }
    
    eventList() {
      return this.state.events.map(function(currentEvent, i) {
        return <Event event={currentEvent} key={i} />
      });
    }

    render() {
        return (
            <Paper>
                <h3 style={{marginTop: 20}}>Work Orders</h3>
                <Table style={{ marginTop: 20}}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Client Name</TableCell>
                      <TableCell>Phone</TableCell>
                      <TableCell>Client Email Address</TableCell>
                      <TableCell>Job Address</TableCell>
                      <TableCell>Date / Start Time</TableCell>
                      <TableCell>End Time</TableCell>
                      <TableCell>Work Requested</TableCell>
                      <TableCell>Date Repaired</TableCell>
                      <TableCell>Performed By</TableCell>
                      <TableCell>Repairs Performed</TableCell>
                      <TableCell>Labor</TableCell>
                      <TableCell>Hours</TableCell>
                      <TableCell>Materials</TableCell>
                      <TableCell>Room</TableCell>
                      <TableCell>Edit</TableCell>
                      <TableCell>Complete</TableCell>
                    </TableRow>
                  </TableHead>
                    <TableBody>
                      { this.eventList() }
                    </TableBody>
                </Table>
            </Paper>
        )
    }
}

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 650,
//   },
// }));

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// export default function SimpleTable() {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.root}>
//       <Table className={classes.table}>
//         <TableHead>
//           <TableRow>
//             <TableCell>Dessert (100g serving)</TableCell>
//             <TableCell align="right">Calories</TableCell>
//             <TableCell align="right">Fat&nbsp;(g)</TableCell>
//             <TableCell align="right">Carbs&nbsp;(g)</TableCell>
//             <TableCell align="right">Protein&nbsp;(g)</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <TableRow key={row.name}>
//               <TableCell component="th" scope="row">
//                 {row.name}
//               </TableCell>
//               <TableCell align="right">{row.calories}</TableCell>
//               <TableCell align="right">{row.fat}</TableCell>
//               <TableCell align="right">{row.carbs}</TableCell>
//               <TableCell align="right">{row.protein}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }