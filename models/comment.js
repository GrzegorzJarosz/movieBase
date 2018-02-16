const mongoose = require('mongoose');
const Schema = mongoose.Schema;

	//comment schema
  var CommentSchema = new Schema({
	  movie_id:String,
		comment:String
	});

const Comment = module.exports = mongoose.model('Comment', CommentSchema);

/*----------------------------------------------------------------------*/
//get comments / all
module.exports.getComments=function(callback){
  Comment.find(callback);
};

/*----------------------------------------------------------------------*/

//get comments by movie_id
module.exports.getCommentsByMovieId= function(movie_id, callback){
  Comment.find({movie_id:movie_id}, callback);
}

/*----------------------------------------------------------------------*/

//add comment
module.exports.addComment= function(comment, callback){
  Comment.create(comment, callback);
}
