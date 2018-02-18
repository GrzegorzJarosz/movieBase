const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
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
const port = process.env.PORT || 8080;

//app
const app = express();

//body-parser
app.use(bodyParser.json());

//cors
app.use(cors());

//def routes
const movies = require('./routes/movies');
const comments = require('./routes/comments');

//
app.use('/movies', movies);
app.use('/comments', comments);

//index route
app.get('/', (req,res)=>{
  res.send('use /movie or /comment endpoint');
});

//start server
app.listen(port, ()=>{
  console.log(`server started on port ${port}`);
});
