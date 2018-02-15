const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/database');

/*-----------------db connection----------------------------------*/
//connect to db
mongoose.connect(config.database);

//on connection
mongoose.connection.on('connected',()=>{
  console.log('connected to database '+config.database);
});

//on error
mongoose.connection.on('error',(err)=>{
  console.log('database erro '+err);
});

/*------------------------------------------------------------------*/

//port number
const port = 3000;

//app
const app = express();

//body-parser
app.use(bodyParser.json());

//index route
app.get('/', (req,res)=>{
  res.send('use /movie or /comment endpoint');
});

//start server
app.listen(port, ()=>{
  console.log('server started on port '+port+'...');
});
