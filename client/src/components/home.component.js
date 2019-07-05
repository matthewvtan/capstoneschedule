import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default class Home extends Component {
    
    render() {
        return (
            <div>
                <li>
                    <Link to="/list" className="nav-link">List</Link>
                </li>
                <li>
                    <Link to="/create" className="nav-link">Add</Link>
                </li>
                <li>
                    <Link to="/calendar" className="nav-link">Calendar</Link> 
                </li>
                <li>
                    <Link to="/export" className="nav-link">Export</Link> 
                </li>
            </div>
        )
    }
}