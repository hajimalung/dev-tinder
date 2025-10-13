const express = require('express');

const app = express();

//request handler!!
//first param can be a string or a regex for matching the route
//second param is the callback function which is called when the route is matched
//callback function takes two params req and res
//req -> incoming request from the client
//res -> response which we will send back to the client
app.use("/",(req,res)=>{
    res.send("Salam from the server!!!");
})

app.use("/hello",(req,res)=>{
    res.send("Hello from the server!!!");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});