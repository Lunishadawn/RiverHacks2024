import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Dropdown.css'

const Dropdown = () => {
    return (    
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" id='btn' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Language
            </button>
            <button class="btn btn-secondary dropdown-toggle" id='btn' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Experience
            </button>
            <button class="btn btn-secondary dropdown-toggle" id='btn' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Topic
            </button>
        <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link 1</a></li>
            <li><a class="dropdown-item" href="#">Link 2</a></li>
            <li><a class="dropdown-item" href="#">Link 3</a></li>
        </ul>
        </div>
    )
}

export default Dropdown;
