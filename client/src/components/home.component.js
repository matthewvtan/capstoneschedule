import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import '../App.css';

export default class Home extends Component {
    
    render() {
        return (
            <div className="button-container">
                <Button variant="contained" color="primary">
                    <Link to="/list" className="nav-link">List</Link>
                </Button>
                {/* <a href="#" class="btn-gradient blue block">
                    <Link to="/list" className="nav-link">List</Link>
                </a> */}
                <br /><br />
                <Button variant="contained" color="primary">
                    <Link to="/create" className="nav-link">Create</Link>
                </Button>
                {/* <a href="#" class="btn-gradient blue block">
                    <Link to="/create" className="nav-link">New Order</Link>
                </a> */}
                <br /><br />
                <Button variant="contained" color="primary">
                    <Link to="/calendar" className="nav-link">Calendar</Link>
                </Button>
                {/* <a href="#" class="btn-gradient blue block">
                    <Link to="/calendar" className="nav-link">Calendar</Link>
                </a> */}
                <br /><br />
                <Button variant="contained" color="primary">
                    <Link to="/export" className="nav-link">Export</Link>
                </Button>
                {/* <a href="#" class="btn-gradient blue block">
                    <Link to="/export" className="nav-link">Export</Link>
                </a> */}
            </div>
        )
    }
}