import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Dropdown.css'

const Dropdown = () => {
    return (    
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" id='btn' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Experience
            </button>
        <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Link 1</a></li>
            <li><a className="dropdown-item" href="#">Link 2</a></li>
            <li><a className="dropdown-item" href="#">Link 3</a></li>
        </ul>
        </div>
    )
}

export default Dropdown;
