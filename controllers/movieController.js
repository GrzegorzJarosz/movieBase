const mongoose = require('mongoose');
const Movie = require('../models/movie');
const remote = require('../ext/remote');
/*----------------------------------------------------------*/
exports.getMovies = (req, res)=>{
  let filter = req.query;
  if(filter.s || filter.c){
    Movie.getMoviesSorted(filter,(err, movies) => {
      if(err){res.send(err);}
      res.json(movies);
    });
  } else {
    Movie.getMovies((err, movies)=>{
      if(err){res.send(err);}
      res.json(movies);
    });
  }
}
/*----------------------------------------------------------*/
exports.ask_addMovie = (req, res) => {
	let movReq = req.body;
	if(movReq.movieTitle){//valid if post empty

		Movie.getMovieByName(movReq.movieTitle, (err, data) => {
			if(err){res.send(err);}
			if(data.length > 0){//validation -if- exist in db
				res.status(409).send(`movie ${movReq.movieTitle} is already exist`);
			}
			if(data.length == 0){//validation -if- not exist in db
			//get-movie-remote----------->
				remote.getMovieRemote(movReq.movieTitle).then((body) => {
					if(JSON.parse(body).Response == "False"){
						res.status(204).send('movie not found');
					}else{
								Movie.addMovie(JSON.parse(body), (err, body) => {
									if(err){res.send(err);}
									res.send(body);
								});
					}
				}).catch((er) => {
					res.status(500).send(`some problems with external api / code: ${er.code}`);
				});
			// <-----------get-movie-remote
			}
		});
	}else{
		res.status(400).send('movie title is required');
	}
}
