const express = require ('express');
const router = express.Router();
const config = require('../config/database');
const Comment  = require('../models/comment');
const Movie  = require('../models/movie');

/*-----------------------get-----------------------------------*/
router.get('/',(req,res)=>{

	let filter=req.query.id;

	if(filter){
		Comment.getCommentsByMovieId(filter,(err,datax)=>{
			if(err){res.send(err);}
			res.json(datax);
		});
	}else{
		Comment.getComments((err,dataz)=>{
			if(err){res.send(err);}
			res.json(dataz);
		});
	}
});

/*-----------------------post-----------------------------------*/

router.post('/',(req,res)=>{
	if(req.body.movie_id && req.body.comment){
		Comment.addComment(req.body, (err,data)=>{
			if(err){res.send(err);}
			res.send(data);
		});
	}else{
		res.status(400).send('invalid req');
	}
});

/*----------------------------------------------------------*/
module.exports= router;
