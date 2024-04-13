import React from 'react';
import { Link } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import CreateBlog from '../pages/CreateBlog';


const NavBar = () => {
    
  return (
    <>
<nav className="navbar navbar-expand bg-body-tertiary">
  <div className="container-fluid min-vw-100">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/create">Create</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/resources">Resources</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar