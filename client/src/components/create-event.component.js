import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import DatePicker from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";


export default class CreateEvent extends Component {
  
    constructor(props) {
      super(props);

      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeAddress = this.onChangeAddress.bind(this);
      this.onChangeJobAddress = this.onChangeJobAddress.bind(this);
      this.onChangeStart = this.onChangeStart.bind(this);
      this.onChangeEnd = this.onChangeEnd.bind(this);
      this.onChangeWorkRequested = this.onChangeWorkRequested.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      
      
      this.state = {
        title:'',
        phone:'',
        address: '',
        job_address:'',
        start:'',
        end: '',
        work_requested: '',
        date_repaired: '',
        performed_by: '',
        repairs_performed: '',
        labor: '',
        hours: '',
        materials: '',
        room: '',
        completed: false
      }
    }
    
    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
    }
    
    onChangePhone(e) {
      this.setState({
        phone: e.target.value
      });
    }
    
    onChangeAddress(e) {
        this.setState({
          address: e.target.value
        });
      }

    onChangeJobAddress(e) {
    this.setState({
        job_address: e.target.value
    });
    }

    onChangeStart(date) {
    this.setState({
        start: date
    });
    }

    onChangeEnd(endTime) {
        this.setState({
          end: endTime
        });
      }

    onChangeWorkRequested(e) {
        this.setState({
            work_requested: e.target.value
        });
    }

    onSubmit(e) {
      e.preventDefault();

      console.log(`Form submitted:`);
      console.log(`Title: ${this.state.title}`);
      console.log(`Phone: ${this.state.phone}`);
      console.log(`Address: ${this.state.address}`);
      console.log(`Job Address: ${this.state.job_address}`);
      console.log(`Start: ${this.state.start}`);
      console.log(`End: ${this.state.end}`);
      console.log(`Work Requested: ${this.state.work_requested}`);

      const newEvent = {
        title: this.state.title,
        phone: this.state.phone,
        address: this.state.address,
        job_address: this.state.job_address,
        start: this.state.start,
        end: this.state.end,
        work_requested: this.state.work_requested,
        date_repaired: this.state.date_repaired,
        performed_by: this.state.performed_by,
        repairs_performed: this.state.repairs_performed,
        labor: this.state.labor,
        hours: this.state.hours,
        materials: this.state.materials,
        room: this.state.room,
        completed: this.state.completed
        }      
      
      axios.post('http://localhost:4000/events/add', newEvent)
        .then(res => console.log(res.data));
      
      this.setState({
        title:'',
        phone: '',
        address:'',
        job_address:'',
        start:'',
        end:'',
        work_requested:'',
        date_repaired:'',
        performed_by:'',
        repairs_performed:'',
        labor:'',
        hours:'',
        materials:'',
        room:'',
        completed: false
      })
    }
    
    render() {
        return (
            <div className="form-container" style={{marginTop:70, marginBottom:30}}>
                <h3>Create New Event</h3>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <label>Client Name: </label>
                    <input type="text" className="form-control" placeholder="Client Name" value={this.state.title} onChange={this.onChangeTitle}
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone: </label>
                    <input type="text" className="form-control" placeholder="555-555-5555" value={this.state.phone} onChange={this.onChangePhone}
                    />
                  </div>

                  <div className="form-group">
                    <label>Address: </label>
                    <input type="text" className="form-control" placeholder="Address" value={this.state.address} onChange={this.onChangeAddress}
                    />
                  </div>

                  <div className="form-group">
                    <label>Job Address: </label>
                    <input type="text" className="form-control" placeholder="If different than above address" value={this.state.job_address} onChange={this.onChangeJobAddress}
                    />
                  </div>

                  <div className="form-group">
                    <label>Date: </label><br />
                    <DatePicker dateFormat="yyyy/MM/dd h:mm a"
                                selected={this.state.start}
                                showTimeSelect
                                timeIntervals={30}
                                timeCaption="Start"
                                placeholderText="Choose Date"
                                className="form-control"
                                placeholder={this.state.start} 
                                value={this.state.start} 
                                onChange={this.onChangeStart}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Time: </label><br />
                    <DatePicker placeholderText="Choose End Time"
                                selected={this.state.end}
                                showTimeSelect
                                showTimeSelectOnly
                                timeIntervals={15}
                                dateFormat="h:mm aa"
                                timeCaption="End"
                                className="form-control"
                                value={this.state.end} 
                                onChange={this.onChangeEnd}
                    />
                  </div>

                  <div className="form-group">
                    <label>Work Requested: </label>
                    <textarea className="form-control" placeholder="Work Requested" value={this.state.work_requested} onChange={this.onChangeWorkRequested}
                    />
                  </div>

                  <input type="submit" value="Create New Order" className="btn btn-primary" />
                </form>
            </div>
        )
    }
}