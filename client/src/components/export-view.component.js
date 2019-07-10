import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
 
import '../App.css';

const Event = props => (
  <TableRow>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.title}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.phone}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.email_address}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.job_address}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.employee}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY hh:mm a")}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.labor}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.hours}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.materials}</TableCell>
    <TableCell className={props.event.completed ? 'completed' : ''}>{props.event.completed ? 'Complete' : 'Incomplete'}</TableCell>
  </TableRow>
)

export default class ExportView extends Component {
  
    constructor(props) {
      super(props);
      this.state = {events: []};
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
    
    // componentDidUpdate() {
    //   axios.get('/events')
    //     .then(response => {
    //       this.setState({events: response.data})
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
            <div>
              <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button"
                    table="completedOrders"
                    filename={"COMPLETED_ORDERS_"+moment().format("MM/DD/YYYY hh:mm")}
                    sheet="COMPLETED_ORDERS"
                    buttonText="Download as XLS"/>
                <h3 style={{marginTop: 20}}>Work Orders</h3>
                <Paper>
                  <Table id="completedOrders" className="table table-responsive table-bordered" style={{ marginTop: 20}}>
                    <TableHead>
                      <TableRow>
                        <TableCell>Client Name</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>Email Address</TableCell>
                        <TableCell>Job Address</TableCell>
                        <TableCell>Assignee</TableCell>
                        <TableCell>Date Repaired</TableCell>
                        <TableCell>Labor</TableCell>
                        <TableCell>Hours</TableCell>
                        <TableCell>Materials</TableCell>
                        <TableCell>Status</TableCell>
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