const serverless = require("serverless-http");
const express = require("express");
const app = express();
const cors = require("cors");
//  const PORT = 3000; // local testing
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

//  // listener is not required/ local testing
//  app.listen(PORT, () => console.log('App deployed on port ' + PORT))
module.exports.handler = serverless(app);
