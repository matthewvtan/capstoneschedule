import React, { Component } from 'react';
import axios from 'axios';
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class CreateEvent extends Component {
  
    constructor(props) {
      super(props);

      this.onChangeTitle = this.onChangeTitle.bind(this);
      this.onChangePhone = this.onChangePhone.bind(this);
      this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
      this.onChangeJobAddress = this.onChangeJobAddress.bind(this);
      this.onChangeEmployee = this.onChangeEmployee.bind(this);
      this.onChangeStart = this.onChangeStart.bind(this);
      this.onChangeEnd = this.onChangeEnd.bind(this);
      this.onChangeWorkRequested = this.onChangeWorkRequested.bind(this);

      this.onSubmit = this.onSubmit.bind(this);
      
      this.state = {
        title:'',
        phone:'',
        email_address: '',
        job_address:'',
        employee:'',
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
        completed: false,
        formData: {
          title:'',
          phone:'',
          email_address: '',
          job_address:'',
          employee:'',
          start:'',
          end: '',
          work_requested: ''
      },
        submitted: false
      }
    }
    
    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      });
      const { formData } = this.state;
      formData[e.target.name] = e.target.value;
      this.setState({ formData });
    }
    
    onChangePhone(e) {
      this.setState({
        phone: e.target.value
      });
      const { formData } = this.state;
      formData[e.target.name] = e.target.value;
      this.setState({ formData });
    }
    
    onChangeEmailAddress(e) {
        this.setState({
          email_address: e.target.value
        });
        const { formData } = this.state;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
      }

    onChangeJobAddress(e) {
    this.setState({
        job_address: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
    }

    onChangeEmployee(e) {
      this.setState({
        employee: e.target.value
      });
      const { formData } = this.state;
      formData[e.target.name] = e.target.value;
      this.setState({ formData });
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
        const { formData } = this.state;
        formData[e.target.name] = e.target.value;
        this.setState({ formData });
    }

    onSubmit(e) {
      e.preventDefault();

      console.log(`Form submitted:`);
      console.log(`Title: ${this.state.title}`);
      console.log(`Phone: ${this.state.phone}`);
      console.log(`Email Address: ${this.state.email_address}`);
      console.log(`Job Address: ${this.state.job_address}`);
      console.log(`Employee: ${this.state.employee}`);
      console.log(`Start: ${this.state.start}`);
      console.log(`End: ${this.state.end}`);
      console.log(`Work Requested: ${this.state.work_requested}`);

      const newEvent = {
        title: this.state.title,
        phone: this.state.phone,
        email_address: this.state.email_address,
        job_address: this.state.job_address,
        employee: this.state.employee,
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
      
      axios.post('/events/add', newEvent)
        .then(
          alert("Work Order Successfully Submitted")
          );

      this.setState({
        title:'',
        phone: '',
        email_address:'',
        job_address:'',
        employee:'',
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
        completed: false,
        submitted: true
      }, () => {
        setTimeout(() => this.setState({ submitted: false}), 5000);
      });
    }
    
    render() {
      const { formData, submitted } = this.state;
        return (
          <div className="form-container" style={{margin: 30}}>
              <Paper style={{padding: 30}}>
              <h3>New Work Order</h3>
                <Divider />
                <ValidatorForm ref="form" onSubmit={this.onSubmit} style={{margin: 20}}>

                <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Client Name"
                        placeholder="Client Name"
                        margin="normal"
                        variant="outlined"
                        name="title"
                        value={formData.title}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangeTitle}
                        />
                  </div>
                  <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Phone Number"
                        placeholder="555-555-5555"
                        margin="normal"
                        variant="outlined"
                        name="phone"
                        value={formData.phone}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangePhone}
                        />
                  </div>
                  <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Client Email"
                        placeholder="Client Email Address"
                        margin="normal"
                        variant="outlined"
                        name="email_address"
                        value={formData.email_address}
                        validators={['required']}
                        errorMessages={['this field is required']}                        
                        onChange={this.onChangeEmailAddress}
                        />
                  </div>

                  <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Job Address"
                        placeholder="Job Address"
                        margin="normal"
                        variant="outlined"
                        name="job_address"
                        value={formData.job_address}
                        validators={['required']}
                        errorMessages={['this field is required']}                        
                        onChange={this.onChangeJobAddress}
                        />
                  </div>

                  <div className="form-group">
                    <TextValidator
                      id="outlined-with-placeholder"
                      label="Assignee"
                      placeholder="Employee Name"
                      margin="normal"
                      variant="outlined"
                      name="employee"
                      value={formData.employee}
                      validators={['required']}
                      errorMessages={['this field is required']}                      
                      onChange={this.onChangeEmployee}
                      />
                  </div>
                  {/* <div className="form-group">
                    <TextValidator
                      id="datetime-local"
                      label="Date/Start Time"
                      type="datetime-local"
                      value={this.state.start}
                      onChange={this.onChangeStart}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    </div>
                    <div className="form-group">
                    <TextValidator
                      id="time"
                      label="End Time"
                      type="time"
                      value={this.state.end}
                      onChange={this.onChangeEnd}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                    </div> */}

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
                                timeIntervals={30}
                                dateFormat="h:mm aa"
                                timeCaption="End"
                                className="form-control"
                                value={this.state.end} 
                                onChange={this.onChangeEnd}
                    />
                  </div>
 
                    <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Work Requested"
                        placeholder="Work Requested"
                        margin="normal"
                        variant="outlined"
                        name="work_requested"
                        value={formData.work_requested}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangeWorkRequested}
                        />
                        <br />
                    </div>
                    <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}
                >
                    {
                        (submitted && 'Your form is submitted!')
                        || (!submitted && 'Submit')
                    }
                </Button>
                </ValidatorForm>
              </Paper>
          </div>
        )
    }
}