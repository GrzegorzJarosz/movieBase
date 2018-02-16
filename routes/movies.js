const express = require ('express');
const router = express.Router();
const config = require('../config/database');
const Movie  = require('../models/movie');
const remote = require('../ext/remote');

/*-----------------------get-----------------------------------*/

router.get('/',(req,res)=>{

	let filter=req.query;

	if(filter.s || filter.c){
		Movie.getMoviesSorted(filter,(err,movies)=>{
			if(err){
				throw err;
				console.log(err);
			}
			res.json(movies);
		});
	}else{
		Movie.getMovies((err,movies)=>{
			if(err){
				throw err;
				console.log(err);
			}
			res.json(movies);
		});
	}
});

/*-----------------------post-----------------------------------*/
router.post('/',(req,res)=>{
	let movReq= req.body;
	if(movReq.movieTitle){//valid if post empty

		Movie.getMovieByName(movReq.movieTitle, (err,data)=>{
			if(err){
				throw err;
				console.log(err);
			}
			if(data.length>0){//validation -if- exist in db
				res.json({success:false, msg:`movie ${movReq.movieTitle} is already exist`});
			}
			if(data.length==0){//validation -if- not exist in db
			//get-movie-remote----------->
				remote.getMovieRemote(movReq.movieTitle).then((body)=>{
					if(JSON.parse(body).Response=="False"){
						res.json({success:false, msg:'movie not found..'});
					}else{
								Movie.addMovie(JSON.parse(body), (err,body)=>{
									if(err){console.log(err);throw err;}
									res.json({success:true, body});
								});
					}
				}).catch((er)=>{
					res.json({success:false, msg:'some problems..'});
					console.log(er);
				});
			// <-----------get-movie-remote
			}
		});
	}else{
		res.json({success:false, msg:'movie title is required!'})
	}
});

/*----------------------------------------------------------*/
module.exports= router;
