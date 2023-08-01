const express = require('express')
const app = express()
const mongoose = require('mongoose');
var routes = require('./route/routes');
mongoose.set('strictQuery', false);

app.listen(9992,function check(err)
{
    if(err)
    console.log("error")
    else
    console.log("started")
});

//const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/login")
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch(error => console.error("Error connecting to MongoDB:", error));

  app.use(express.json());
  app.use(routes);
