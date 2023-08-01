const express = require('express')
const app = express()
const mongoose = require('mongoose');
var routes = require('./routes/routes');
mongoose.set('strictQuery', false);
const cors = require ('cors');

app.use(cors(

{
    origin: "http://127.0.0.1:3000"
}



));

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

 // const express = require('express');
const bodyParser = require('body-parser');

//const app = express();

// Parse incoming requests with JSON payloads
app.use(bodyParser.json());

// Rest of your Express app setup
// ...

