import React, { Component } from 'react';
import axios from 'axios';

export default class EditEvent extends Component {
  
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
          employee: response.data.employee,
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

  onChangeEmployee(e) {
    this.setState({
      employee: e.target.value
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
    };
    axios.post('/events/update/'+this.props.match.params.id, obj)
      .then(res => console.log(res.data));
      
    this.props.history.push('/');
  }
  
    render() {
        return (
            <div className="form-container" style={{marginTop: 80}}>
              <h3>Complete Order</h3>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Title:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.title}
                    onChange={this.onChangeTitle}
                    />
                </div>
                <div className="form-group">
                  <label>Phone:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.phone}
                    onChange={this.onChangePhone}
                    />
                </div>
                <div className="form-group">
                  <label>Client Email Address:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.email_address}
                    onChange={this.onChangeEmailAddress}
                    />
                </div>
                <div className="form-group">
                  <label>Job Address:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.job_address}
                    onChange={this.onChangeJobAddress}
                    />
                </div>
                <div className="form-group">
                  <label>Assignee:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.employee}
                    onChange={this.onChangeEmployee}
                    />
                </div>
                <div className="form-group">
                  <label>Start:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.start}
                    onChange={this.onChangeStart}
                    />
                </div>
                <div className="form-group">
                  <label>End:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.end}
                    onChange={this.onChangeEnd}
                    />
                </div>
                <div className="form-group">
                  <label>Work Requested:</label>
                  <input type="text"
                    className="form-control"
                    value={this.state.work_requested}
                    onChange={this.onChangeWorkRequested}
                    />
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
                  <input type="text"
                    className="form-control"
                    value={this.state.labor}
                    onChange={this.onChangeLabor}
                    />
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
                  <input type="submit" value="Save Changes" className="btn btn-primary" />
                </div>
              </form>
            </div>
        )
    }
}