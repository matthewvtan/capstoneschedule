import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
 
import '../App.css';

const Event = props => (
  <tr>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.title}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.phone}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.email_address}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.job_address}</td>
    <td className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY hh:mm a")}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.labor}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.hours}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.materials}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.completed ? 'Complete' : 'Incomplete'}</td>
  </tr>
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
                <table id="completedOrders" className="table table-responsive table-bordered" style={{ marginTop: 20}}>
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Phone</th>
                      <th>Email Address</th>
                      <th>Job Address</th>
                      <th>Date Repaired</th>
                      <th>Labor</th>
                      <th>Hours</th>
                      <th>Materials</th>
                      <th>Completed</th>
                    </tr>
                  </thead>
                    <tbody>
                      { this.eventList() }
                    </tbody>
                </table>
            </div>
        )
    }
}