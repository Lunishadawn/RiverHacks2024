import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Card.css'

const Card = ({ title, description}) => {
    return (
        <div className="card">
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <hr />
              <p className="card-text">{description}</p>
              <a href="#" className="card-link">Read more</a>
            </div>
        </div>
    )
}

export default Card;

