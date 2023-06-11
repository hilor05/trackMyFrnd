const express = require('express');
const port = process.env.PORT || 3000;
const index= require('./index');
const app = express();
app.set('view engine', 'ejs');
// const server = http.createServer((req, res) => {
//     // Set the response header
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
      
//     // Send a response to the client
//     res.end('Hello, World!');
//   });

  // Start the server
app.get('/login', (req, res, next)=>{
    res.render('../html/login');
});
app.get('/renderMap', (req, res, next)=>{
  res.render('../html/map');
});


app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});