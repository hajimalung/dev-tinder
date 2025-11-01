const express = require('express');

const app = express();

//request handler!!
//first param can be a string or a regex for matching the route
//second param is the callback function which is called when the route is matched
//callback function takes two params req and res
//req -> incoming request from the client
//res -> response which we will send back to the client
app.use("/hello/2",(req,res)=>{
    res.send("Abrakadabra!!!");
})

app.use("/hello",(req,res)=>{
    req.method === "GET" ? res.send("Hello GET from the server!!!") :
    res.send("Hello POST from the server!!!");
})

app.get("/user", (req,res)=>{
    res.send({name: "John", age: 30});
});

app.post("/user", (req,res)=>{
    res.send("User created successfully!");
});

app.delete("/user", (req,res)=>{
    res.send("User deleted successfully!");
});
// order of route definitions matter
app.use("/user",(req,res)=>{
    res.send("About us page");
});

// the route string is a regex pattern
app.use("/ab?c",(req,res)=>{
    res.send("About us page");
});

app.use("/",(req,res)=>{
    res.send("Salam from the server!!!");
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});