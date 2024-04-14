import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Dropdown from '../components/Dropdown'
import '../css/Blogs.css'
import Modal from '../components/Modal'

const Blogs = () => {
  return (
    <>
    <div className='navDiv'><NavBar /> </div>
    <div class='header'>
        <h1 >All Posts</h1>
    </div>
    <div class="filter">
        <h2>Filter by: </h2>
        <Dropdown/>
    </div>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">
          <Card/>
        </div>
        <div class="col">
          <Card/>
        </div>
        <div class="col">
          <Card/>
        </div>
        <div class="col">
          <Card/>
        </div>
      </div>
    </>
  )
}

export default Blogs