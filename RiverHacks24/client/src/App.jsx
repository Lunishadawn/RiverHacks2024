import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from './pages/Homepage';
import CreateBlog from './pages/CreateBlog';
import About from './pages/About';
import Blogs from './pages/Blogs';
import Resources from './pages/Resources';
import Success from './pages/Success'


function App() {

  return (
    <>
  <Router basename="/RiverHacks2024">
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/create" element={<CreateBlog />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/success" element={<Success />} />

    </Routes>
  </Router>
    </>
  )
}

export default App
