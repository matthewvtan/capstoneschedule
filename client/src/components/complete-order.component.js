import React, { Component } from 'react';
import axios from 'axios';

export default class CompleteOrder extends Component {
  
  constructor(props) {
    super(props);
    
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
    this.onChangeJobAddress = this.onChangeJobAddress.bind(this);
    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.onChangeWorkRequested = this.onChangeWorkRequested.bind(this);
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

  onChangeEmailAddress(e) {
    this.setState({
      email_address: e.target.value
    });
  }

  onChangeJobAddress(e) {
    this.setState({
      job_address: e.target.value
    });
  }

  onChangeStart(e) {
    this.setState({
      start: e.target.value
    });
  }

  onChangeEnd(e) {
    this.setState({
      end: e.target.value
    });
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
            <div className="form-container" style={{marginTop: 30}}>
              <h3>Complete Order</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="inactive">
                    <div className="form-group">
                    <label>Client Name:</label>
                    <p>{this.state.title}</p>
                    </div>
                    <div className="form-group">
                    <label>Phone:</label>
                    <p>{this.state.phone}</p>
                    </div>
                    <div className="form-group">
                    <label>Email Address:</label>
                    <p>{this.state.email_address}</p>

                    </div>
                    <div className="form-group">
                    <label>Job Address:</label>
                    <p>{this.state.job_address}</p>

                    </div>
                    <div className="form-group">
                    <label>Start:</label>
                    <p>{this.state.start}</p>
                    </div>
                    <div className="form-group">
                    <label>End:</label>
                    <p>{this.state.end}</p>
                    </div>
                    <div className="form-group">
                    <label>Work Requested:</label>
                    <p>{this.state.workRequested}</p>
                    </div>
                  </div>
                <div className="form-group">
                  <label>Date Repaired:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.date_repaired}
                    onChange={this.onChangeDateRepaired}
                    />
                </div>
                <div className="form-group">
                  <label>Performed By:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.performed_by}
                    onChange={this.onChangePerformedBy}
                    />
                </div>
                <div className="form-group">
                  <label>Repairs Performed:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.repairs_performed}
                    onChange={this.onChangeRepairsPerformed}
                    />
                </div>
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
                  <label>Hours:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.hours}
                    onChange={this.onChangeHours}
                    />
                </div>
                <div className="form-group">
                  <label>Materials:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.materials}
                    onChange={this.onChangeMaterials}
                    />
                </div>
                <div className="form-group">
                  <label>Room:</label>
                  <input type="text"
                    className="form-control"
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