const express = require ('express');
const router = express.Router();
const config = require('../config/database');
const Movie  = require('../models/movie');
//
const remote = require('../ext/remote');

/*-----------------------get-----------------------------------*/
router.get('/',(req,res)=>{
	Movie.getMovies((err,movies)=>{
		if(err){
			throw err;
			console.log(err);
		}
		res.json(movies);
	});
});

/*-----------------------post-----------------------------------*/
router.post('/',(req,res)=>{

});//.post

/*----------------------------------------------------------*/
module.exports= router;
