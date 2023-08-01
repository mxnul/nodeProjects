var express = require('express');

var server = express();

var routes = require('./routes/routes');

var mongoose = require('mongoose');

const cors = require('cors');


// mongoose.connect("mongodb://127.0.0.1:27017/crud",{useNewUrlParser: true , useUnifiedTopology: true},function checkDB(error)
// {

//     if(error)
//     {
//         console.log(errorr)
//     }
//     else
//     {
//        console.log("database connected")
//     }
// });
// //mongoose.connect("mongodb://localhost:127.0.0.1/crud",{useNewUrlParser: true,  useUnifiedTopology: true },).then(()=>console.log('connected successfully')).catch((err)=>{console.error(err);});

// mongoose.connect("mongodb://127.0.0.1:27017/crud")
//   .then(() => console.log("Connected to Mongo Successfully"))
//   .catch(error => handleError(error));

  mongoose.connect("mongodb://127.0.0.1:27017/crud")
  .then(() => console.log("Connected to Mongo Successfully"))
  .catch(error => console.error("Error connecting to MongoDB:", error));

//   try {
//     mongoose.connect("mongodb://127.0.0.1:27017/crud");
//     console.log("Connected to Mongo Successfully");
//   } catch (error) {
//     handleError(error);
//   }

//   let output;
// (async () => {
//    output = await data.save();
// })
// console.log(output);

// const connectToMongo = async () => {
//   await mongoose.connect(process.env.mongodb://localhost:127.0.0.1/crud);
//   console.log("Connected to MongoDB");
// };

//const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:127.0.0.1/crud";

// const connectToMongo = async () => {
//  mongoose.connect(mongoURI, await console.log("Connected to mongo `Successful"));
// }

// module.exports = connectToMongo;


//connectToMongo();

server.use(cors());
server.use(express.json());
server.use(routes);


server.listen(8003,function check(error)
{

    if(error)
    {
        console.log("error")
    }
    else
    {
    console.log("starting...")
    }
});


