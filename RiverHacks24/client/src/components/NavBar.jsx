import React from 'react';
import { Link } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import CreateBlog from '../pages/CreateBlog';
import '../css/NavBar.css'

const NavBar = () => {
    
  return (
    <>
<nav className="navbar navbar-expand bg-body-tertiary">
  <div className="container-fluid min-vw-100" id="container">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link" id='home' href="javascript:void(0)">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id='about' href="javascript:void(0)">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id='blogs' href="javascript:void(0)">Blogs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id='create' href="javascript:void(0)">Create</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id='resources' href="javascript:void(0)">Resources</a>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" id='login-btn' type="button">Login</button>
      </form>
    </div>
  </div>
</nav>
    </>
  )
}

export default NavBar