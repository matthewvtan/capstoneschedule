import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import '../App.css';

const Event = props => (
  <tr>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.title}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.phone}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.address}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.job_address}</td>
    <td className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY hh:mm a")}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.labor}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.hours}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.materials}</td>
  </tr>
)

export default class ExportView extends Component {
  
    constructor(props) {
      super(props);
      this.state = {events: []};
    }
    
    componentDidMount() {
      axios.get('http://localhost:4000/events')
        .then(response => {
          this.setState({events: response.data})
          console.log({events: response.data})
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
    componentDidUpdate() {
      axios.get('http://localhost:4000/events')
        .then(response => {
          this.setState({events: response.data})
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    
    eventList() {
      return this.state.events.map(function(currentEvent, i) {
        return <Event event={currentEvent} key={i} />
      });
    }
    
    render() {
        return (
            <div>
                <h3 style={{marginTop: 20}}>Work Orders</h3>
                <table className="table table-responsive table-bordered" style={{ marginTop: 20}}>
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Job Address</th>
                      <th>Date Repaired</th>
                      <th>Labor</th>
                      <th>Hours</th>
                      <th>Materials</th>
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