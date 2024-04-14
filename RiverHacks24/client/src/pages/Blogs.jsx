import React from 'react'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Dropdown from '../components/Dropdown'
import '../css/Blogs.css'
import { useState, useEffect } from 'react'

const Blogs = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://6fcf6z7l6l.execute-api.us-east-2.amazonaws.com/dev/posts')
  .then(res => res.json())
  .then(data => {
    console.log(data[0])
    setPosts(data)
})
  .catch((error) => console.log("Error creating new blog post: ", error))
  }, [])



  return (
    <>
    <div className='navDiv'><NavBar /> </div>
    <div className='header'>
        <h1 >All Posts</h1>
    </div>
    <div className="filter">
        <h2>Filter by: </h2>
        <Dropdown/>
    </div>
    <div className="row row-cols-1 row-cols-md-2 g-4">
      {posts.map((post) => ( 
        <div className="col" key={post.id}>
        <Card title={post.title} author={post.author} description={post.description}/>
        </div>
       ))}
      </div>
    </>
  )
}

export default Blogs