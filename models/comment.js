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
