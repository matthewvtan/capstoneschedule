import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const labors = [
  {
    value: '1M',
    label: '1M',
  },
  {
    value: '2M',
    label: '2M',
  },
  {
    value: '3M',
    label: '3M',
  },
  {
    value: '4M',
    label: '4M',
  },
];

export default class CompleteOrder extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeDateRepaired = this.onChangeDateRepaired.bind(this);
    this.onChangePerformedBy = this.onChangePerformedBy.bind(this);
    this.onChangeRepairsPerformed = this.onChangeRepairsPerformed.bind(this);
    this.onChangeLabor = this.onChangeLabor.bind(this);
    this.onChangeHours = this.onChangeHours.bind(this);
    this.onChangeMaterials = this.onChangeMaterials.bind(this);
    this.onChangeRoom = this.onChangeRoom.bind(this);
    this.onChangeCompleted = this.onChangeCompleted.bind(this);

    this.onSubmit = this.onSubmit.bind(this);
    
    this.state = {
        title:'',
        phone:'',
        address: '',
        email_address:'',
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
          date_repaired: '',
          performed_by: '',
          repairs_performed: '',
          labor: '',
          hours: '',
          materials: '',
          room: ''
      },
        submitted: false
    }
  }
  
  componentDidMount() {
    axios.get('/events/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          title: response.data.title,
          phone: response.data.phone,
          email_address: response.data.email_address,
          job_address: response.data.job_address,
          start: response.data.start,
          end: response.data.end,
          work_requested: response.data.work_requested,
          date_repaired: response.data.date_repaired,
          performed_by: response.data.performed_by,
          repairs_performed: response.data.repairs_performed,
          labor: response.data.labor,
          hours: response.data.hours,
          materials: response.data.materials,
          room: response.data.room,
          completed: response.data.completed
        })
      })
      .catch(function(error) {
        console.log(error)
      })
  }

  onChangeDateRepaired(e) {
    this.setState({
      date_repaired: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangePerformedBy(e) {
    this.setState({
      performed_by: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangeRepairsPerformed(e) {
    this.setState({
      repairs_performed: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangeLabor(e) {
    this.setState({
      labor: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangeHours(e) {
    this.setState({
      hours: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangeMaterials(e) {
    this.setState({
      materials: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangeRoom(e) {
    this.setState({
      room: e.target.value
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }

  onChangeCompleted(e) {
    this.setState({
      completed: !this.state.completed
    });
    const { formData } = this.state;
    formData[e.target.name] = e.target.value;
    this.setState({ formData });
  }
  
  onSubmit(e) {
    e.preventDefault();
    const obj = {
      title: this.state.title,
      phone: this.state.phone,
      email_address: this.state.email_address,
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
    };
    axios.post('/events/update/'+this.props.match.params.id, obj)
      .then(res => console.log(res.data));
      
    this.props.history.push('/');

    this.setState({ submitted: true }, () => {
      setTimeout(() => this.setState({ submitted: false }), 5000);
  });
  }
  
    render() {
      const { formData, submitted } = this.state;
        return (
            <div className="form-container" style={{margin: 30}}>
                <Paper style={{padding: 30}}>
                <h3>Complete Order</h3>
                <Divider />
                  <ValidatorForm ref="form" onSubmit={this.onSubmit} style={{margin: 20}}>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Client Name"
                        value={this.state.title}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Phone Number"
                        value={this.state.phone}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Client Email"
                        value={this.state.email_address}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Job Address"
                        value={this.state.job_address}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Assignee"
                        value={this.state.employee}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Date / Start Time"
                        value={this.state.start}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Est. End Time"
                        value={this.state.end}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
                    <div className="form-group">
                      <TextField
                        disabled
                        id="outlined-disabled"
                        label="Work Requested"
                        value={this.state.work_requested}
                        margin="normal"
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                      />
                    </div>
<br />
    {/* - - - - - - - - - - - - INPUTS BEGIN HERE - - - - - - - - - - - - - - */}
<hr />
<br />
                    <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Date Repaired"
                        placeholder="MM/DD/YYYY"
                        margin="normal"
                        name="date_repaired"
                        variant="outlined"
                        value={formData.date_repaired}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        // value={this.state.date_repaired}
                        onChange={this.onChangeDateRepaired}
                        />
                    </div>

                    <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Performed By"
                        placeholder="Employee Name"
                        margin="normal"
                        name="performed_by"
                        variant="outlined"
                        value={formData.performed_by}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangePerformedBy}
                        />
                    </div>
                    <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Repairs Performed"
                        placeholder="Repairs Performed"
                        margin="normal"
                        name="repairs_performed"
                        variant="outlined"
                        value={formData.repairs_performed}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangeRepairsPerformed}
                        />
                    </div>

    {/* - - - - - - - - - - - - - - - LABOR INPUT RADIO BUTTONS - - - - - - - - - - - - */}
                    <div className="form-group">
                      <TextValidator
                              id="outlined-select-currency"
                              select
                              label="Labor"
                              name="labor"
                              value={formData.labor}
                              validators={['required']}
                              errorMessages={['this field is required']}
                              onChange={this.onChangeLabor}
                              SelectProps={{
                                MenuProps: {},
                              }}
                              helperText="Select 1M, 2M, 3M, or 4M"
                              margin="normal"
                              variant="outlined"
                            >
                              {labors.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                        </TextValidator>
                      </div>
                    {/* <div className="form-group">
                      <label>Labor:</label>
                      <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="priorityOptions" 
                                        id="laborT1" 
                                        value="T1"
                                        checked={this.state.labor==='T1'} 
                                        onChange={this.onChangeLabor}
                                        />
                                <label className="form-check-label">T1</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="priorityOptions" 
                                        id="laborT2" 
                                        value="T2" 
                                        checked={this.state.labor==='T2'} 
                                        onChange={this.onChangeLabor}
                                        />
                                <label className="form-check-label">T2</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="laborOptions" 
                                        id="laborT3" 
                                        value="T3" 
                                        checked={this.state.labor==='T3'} 
                                        onChange={this.onChangeLabor}
                                        />
                                <label className="form-check-label">T3</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <input  className="form-check-input" 
                                        type="radio" 
                                        name="laborOptions" 
                                        id="laborT4" 
                                        value="T4" 
                                        checked={this.state.labor==='T4'} 
                                        onChange={this.onChangeLabor}
                                        />
                                <label className="form-check-label">T4</label>
                            </div>
                        </div>
                    </div> */}
    {/* - - - - - - - - - - - - LABOR INPUT ENDS HERE - - - - - - - - - - - */}
                   <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Hours"
                        placeholder="Hours"
                        margin="normal"
                        name="hours"
                        variant="outlined"
                        value={formData.hours}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangeHours}
                        />
                    </div>
                    <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Materials Used"
                        placeholder="Materials Used"
                        margin="normal"
                        name="materials"
                        variant="outlined"
                        value={formData.materials}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangeMaterials}
                        />
                    </div>
                    <div className="form-group">
                      <TextValidator
                        id="outlined-with-placeholder"
                        label="Room"
                        placeholder="Room"
                        margin="normal"
                        name="room"
                        variant="outlined"
                        value={formData.room}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        onChange={this.onChangeRoom}
                        />
                    </div>
                    
                    <div className="form-check">
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.completed}
                          onChange={this.onChangeCompleted}
                          value={this.state.completed}
                          color="primary"
                        />
                      }
                      label="Completed"
                    />
                    </div>

    {/* - - - - - BOOTSTRAP INPUT CHECKBOX FOR COMPLETED

                    <div className="form-check">
                      <input type="checkbox"
                        className="form-check-input"
                        id="completedCheckbox"
                        name="completedCheckbox"
                        onChange={this.onChangeCompleted}
                        checked={this.state.completed}
                        value={this.state.completed}
                        />
                      <label className="form-check-label" htmlFor="completedCheckbox">
                      Completed
                      </label>
                    </div> */}

                    <br/>
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
                    {/* <div className="form-group">
                      <input type="submit" value="Complete Order" className="btn btn-primary" />
                    </div> */}
                  </ValidatorForm>
                </Paper>
            </div>
        )
    }
}