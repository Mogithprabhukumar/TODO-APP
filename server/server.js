//const todo =require("./models/todo");
const todoRoutes =require('../server/routes/todo')
const cors =require ('cors');

const express =require("express");
// const mongoose =require ("mongoose");
require('dotenv').config();
const connectMongoDb =require('./config/db');
const authRoutes = require("./routes/auth");


const app =express();
app.use(express.json())

const PORT = process.env.PORT || 5000;

//const connectionString="mongodb://0.0.0.0:27017/todo"; //  0.0.0.0.:27017"; localhost:27017
// mongoose.connect(process.env.MONGO_URI)
// .then(()=>{console.log("Db is connected")})
// .catch((err)=>{console.error(`error in db connection:${err}`)})

connectMongoDb()
//cors
app.use(cors({
  origin :[
    "http://localhost:3000"
  ],
  credentials:true
}))

// routes

app.use('/api/todo',todoRoutes)
//app.post('/api/todo', )

//update

//app.patch('/api/todo/:id', )



//app.delete('/api/todo/:id', )

//authentication

app.use('/api',authRoutes);




app.listen(PORT, '127.0.0.1', () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
  });