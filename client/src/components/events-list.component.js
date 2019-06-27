import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import '../App.css';

const Event = props => (
  <tr>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.title}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.phone}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.address}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.job_address}</td>
    <td className={props.event.completed ? 'completed' : ''}>{moment(props.event.start).format("MM/DD/YYYY hh:mm a")}</td>
    <td className={props.event.completed ? 'completed' : ''}>{moment(props.event.end).format("MM/DD/YYYY hh:mm a")}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.work_requested}</td>
    <td className={props.event.completed ? 'completed' : ''}>{moment(props.event.date_repaired).format("MM/DD/YYYY")}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.performed_by}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.repairs_performed}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.labor}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.hours}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.materials}</td>
    <td className={props.event.completed ? 'completed' : ''}>{props.event.room}</td>
    <td>
        <Link to={"/edit/"+props.event._id}>Edit</Link>
    </td>
    <td>
        <Link to={"/complete/"+props.event._id}>Complete</Link>
    </td>
  </tr>
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
            <div>
                <h3 style={{marginTop: 20}}>Work Orders</h3>
                <table className="table-responsive table-bordered" style={{ marginTop: 20}}>
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Phone</th>
                      <th>Address</th>
                      <th>Job Address</th>
                      <th>Date / Start Time</th>
                      <th>End Time</th>
                      <th>Work Requested</th>
                      <th>Date Repaired</th>
                      <th>Performed By</th>
                      <th>Repairs Performed</th>
                      <th>Labor</th>
                      <th>Hours</th>
                      <th>Materials</th>
                      <th>Room</th>
                      <th>Edit</th>
                      <th>Complete</th>
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