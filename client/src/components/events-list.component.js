import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import orderBy from 'lodash/orderBy';
import '../App.css';

const Event = props => (
  <TableRow>
    <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.start).format("MM/DD/YYYY hh:mm a")}</TableCell>
    <TableCell>
        <Link to={"/complete/"+props.event._id}>Complete</Link>
    </TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.title}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.phone}</TableCell>
    {/* <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.email_address}</TableCell> */}
    <TableCell className={props.event.completed ? 'completed' : ''}><a href={"https://www.google.com/maps/search/?api=1&query="+props.event.job_address}>{props.event.job_address}</a></TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.employee}</TableCell>
    {/* <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.end).format("MM/DD/YYYY hh:mm a")}</TableCell> */}
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.work_requested}</TableCell>
    {/* <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY")}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.performed_by}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.repairs_performed}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.labor}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.hours}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.materials}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.room}</TableCell> */}
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.completed ? 'Complete' : 'Incomplete'}</TableCell>
    <TableCell>
        <Link to={"/edit/"+props.event._id}>Edit</Link>
    </TableCell>
  </TableRow>
)

const invertDirection = {
  asc: 'desc',
  desc: 'asc'
};

export default class EventsList extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        events: [],
        columnToSort: '',
        sortDirection: 'desc'

      };
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
          <div style={{margin: 20}}>
            <h3 style={{marginTop: 20}}>Work Orders</h3>
            <Paper>
                <Table 
                  className="table-responsive table-bordered"
                  style={{ marginTop: 20}}
                  handleSort={this.handleSort}
                  data={orderBy(
                    this.state.data, 
                    this.state.columnToSort,
                    this.state.sortDirection
                    )}
                >
                  <TableHead>
                    <TableRow>
                      <TableCell>Date/Time</TableCell>
                      <TableCell>Complete</TableCell>
                      <TableCell>Client Name</TableCell>
                      <TableCell>Phone</TableCell>
                      {/* <TableCell>Client Email</TableCell> */}
                      <TableCell>Job Address</TableCell>
                      <TableCell>Assignee</TableCell>
                      {/* <TableCell>End Time</TableCell> */}
                      <TableCell>Work Requested</TableCell>
                      {/* <TableCell>Date Repaired</TableCell>
                      <TableCell>Performed By</TableCell>
                      <TableCell>Repairs Performed</TableCell>
                      <TableCell>Labor</TableCell>
                      <TableCell>Hours</TableCell>
                      <TableCell>Materials</TableCell>
                      <TableCell>Room</TableCell> */}
                      <TableCell>Status</TableCell>
                      <TableCell>Edit</TableCell>
                    </TableRow>
                  </TableHead>
                    <TableBody>
                      { this.eventList() }
                    </TableBody>
                </Table>
            </Paper>
          </div>
        )
    }
}