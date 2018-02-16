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
			if(err){
				throw err;
				console.log(err);
			}
			res.json(datax);
		});
	}else{
		Comment.getComments((err,dataz)=>{
			if(err){
				throw err;
				console.log(err);
			}
			res.json(dataz);
		});
	}
});

/*-----------------------post-----------------------------------*/

router.post('/',(req,res)=>{
	if(req.body.movie_id && req.body.comment){
		Comment.addComment(req.body, (err,data)=>{
			if(err){
				throw err;
				console.log(err);
			}
			res.json(req.body);
		});
	}else{
		res.json({success:false,msg:'invalid req..'})
	}
});

/*----------------------------------------------------------*/
module.exports= router;
