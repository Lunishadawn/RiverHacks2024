const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require("cors");
const posts = require("./MockData/posts")
 const PORT = 3000; // local testing
// Foundation

// MiddleWare
// built-in middleware for parsing incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: false }));

// built-in middleware for parsing incoming requests with JSON-encoded payloads
app.use(express.json());

// enable cors (cross-origin resource sharing) so server can communicate with client
app.use(cors());

// ROUTES

// root route
app.get("/", (req, res) => {
  res.send("Server");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

app.post('/create', (req, res) => {
  const { title, description, author } = req.body
  //Make sure we have an description sent by user
  if(description){
      //Build our new item
      let newItem = {
          id: Date.now(),
          title: title,
          author: author,
          description: description
      }
      //Add our new item
      posts.push(newItem)
      res.status(201).json({ message: "Success", newItem})
  } else {
      res.status(400).json({ message: "Oops no description recieved"})
  }
})




//  // listener is not required/ local testing
 app.listen(PORT, () => console.log('App deployed on port ' + PORT))
module.exports.handler = serverless(app);
