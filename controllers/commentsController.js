const mongoose = require("mongoose");
const Comment = require("../models/comment");
/*----------------------------------------------------------*/
exports.getComments = (req, res) => {
	let filter = req.query.id;
	if(filter){
		Comment.getCommentsByMovieId(filter,(err,datax) => {
			if(err){res.send(err);}
			res.json(datax);
		});
	} else {
		Comment.getComments((err, dataz)=>{
			if(err){res.send(err);}
			res.json(dataz);
		});
	}
}
/*----------------------------------------------------------*/
exports.addComment = (req, res) => {
	if(req.body.movie_id && req.body.comment){
		Comment.addComment(req.body, (err, data) => {
			if(err){res.send(err);}
			res.send(data);
		});
	} else {
		res.status(400).send('invalid req');
	}
}
