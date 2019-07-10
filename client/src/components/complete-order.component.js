import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

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
        completed: false
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

  onChangeWorkRequested(e) {
    this.setState({
      work_requested: e.target.value
    });
  }

  onChangeDateRepaired(e) {
    this.setState({
      date_repaired: e.target.value
    });
  }

  onChangePerformedBy(e) {
    this.setState({
      performed_by: e.target.value
    });
  }

  onChangeRepairsPerformed(e) {
    this.setState({
      repairs_performed: e.target.value
    });
  }

  onChangeLabor(e) {
    this.setState({
      labor: e.target.value
    });
  }

  onChangeHours(e) {
    this.setState({
      hours: e.target.value
    });
  }

  onChangeMaterials(e) {
    this.setState({
      materials: e.target.value
    });
  }

  onChangeRoom(e) {
    this.setState({
      room: e.target.value
    });
  }

  onChangeCompleted(e) {
    this.setState({
      completed: !this.state.completed
    });
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
  }
  
    render() {
        return (
            <div className="form-container" style={{margin: 30}}>
              <h3>Complete Order</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Client Name"
                    defaultValue={this.state.title}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Phone Number"
                    defaultValue={this.state.phone}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Client Email"
                    defaultValue={this.state.email_address}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Job Address"
                    defaultValue={this.state.job_address}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Assignee"
                    defaultValue={this.state.employee}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Date / Start Time"
                    defaultValue={this.state.start}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Est. End Time"
                    defaultValue={this.state.end}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-read-only-input"
                    label="Work Requested"
                    defaultValue={this.state.work_requested}
                    margin="normal"
                    InputProps={{
                      readOnly: true,
                    }}
                    variant="outlined"
                  />
                </div>

{/* - - - - - - - - - - - - INPUTS BEGIN HERE - - - - - - - - - - - - - - */}

                <div className="form-group">
                  <TextField
                    id="outlined-with-placeholder"
                    label="Date Repaired"
                    placeholder="MM/DD/YYYY"
                    margin="normal"
                    varient="outlined"
                    value={this.state.date_repaired}
                    onChange={this.onChangeDateRepaired}
                    />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-with-placeholder"
                    label="Performed By"
                    placeholder="Employee Name"
                    margin="normal"
                    varient="outlined"
                    value={this.state.performed_by}
                    onChange={this.onChangePerformedBy}
                    />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-with-placeholder"
                    label="Repairs Performed"
                    placeholder="Repairs Performed"
                    margin="normal"
                    varient="outlined"
                    value={this.state.repairs_performed}
                    onChange={this.onChangeRepairsPerformed}
                    />
                </div>

{/* - - - - - - - - - - - - - - - LABOR INPUT RADIO BUTTONS - - - - - - - - - - - - */}

                <div className="form-group">
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
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-with-placeholder"
                    label="Hours"
                    placeholder="Hours"
                    margin="normal"
                    varient="outlined"
                    value={this.state.hours}
                    onChange={this.onChangeHours}
                    />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-with-placeholder"
                    label="Materials Used"
                    placeholder="Materials Used"
                    margin="normal"
                    varient="outlined"
                    value={this.state.materials}
                    onChange={this.onChangeMaterials}
                    />
                </div>
                <div className="form-group">
                  <TextField
                    id="outlined-with-placeholder"
                    label="Room"
                    placeholder="Room"
                    margin="normal"
                    varient="outlined"
                    value={this.state.room}
                    onChange={this.onChangeRoom}
                    />
                </div>
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
                </div>
                <br/>
                <div className="form-group">
                  <input type="submit" value="Complete Order" className="btn btn-primary" />
                </div>
              </form>
            </div>
        )
    }
}