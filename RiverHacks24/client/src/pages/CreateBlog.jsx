import React from 'react'
import NavBar from '../components/NavBar'
import '../css/create.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const CreateBlog = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [description, setDescription] = useState("")

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Preventing the default form submission behavior
    event.preventDefault();
    const blogPost = {title, author, description}

    fetch('https://6fcf6z7l6l.execute-api.us-east-2.amazonaws.com/dev/create', {
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blogPost)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Success", data)
      setTitle("");
      setAuthor("");
      setDescription("");
      navigate('/success');
  })
    .catch((error) => console.log("Error creating new blog post: ", error))
  };




  return (
    <div id='createContainer'>
    <div id='navContainer'>
    <NavBar />
    </div>
    <div className="container" id='formContainer'>
      <h1 className="text-center" id='formHeader'>New Blog Post</h1>
      {/* The form for creating a new blog post */}
        <form onSubmit={handleSubmit}>
      {/* What does our form need? */}
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Title</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Add a title" onChange={(e) => { setTitle(e.target.value) }} value={title}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Author</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name here!" onChange={(e) => { setAuthor(e.target.value) }} value={author}/>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Add a description'onChange={(e) => { setDescription(e.target.value) }} value={description}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </div>
  )
}

export default CreateBlog