const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//movie schema
var MovieSchema = new Schema({
	Title:String,
	Year:String,
  Rated:String,
  Released:String,
	Runtime:String,
	Genre:String,
	Director:String,
  Writer:String,
	Actors:String,
	Plot:String,
	Language:String,
	Country:String,
	Awards:String,
	Poster:String,
  Metascore:String,
  imdbRating:String,
  imdbVotes:String,
	imdbID:String,
  Type:String,
  DVD:String,
  BoxOffice:String,
	Production:String,
	Website:String
});

const Movie = module.exports = mongoose.model('Movie', MovieSchema);

/*----------------------------------------------------------*/

//get movies / all
module.exports.getMovies=function(callback){
  Movie.find(callback);
};

/*----------------------------------------------------------*/
/*
sort by title
s=u increase
s=d decrease

category
c=categoryName

*/
//get movies with params
module.exports.getMoviesSorted= function(p, callback){
	let param=p;
	let findDetails={};
	let sortRule;

	if(param.c){
		findDetails={'Genre':new RegExp(param.c,"i")};
	}

	if(param.s){
		if(param.s=='d'){
			sortRule=-1;
		}else{
			sortRule=1;
		}
	}else{
		sortRule=1;
	}

	Movie.find(findDetails,callback).sort({"Title":sortRule});
};

/*----------------------------------------------------------*/

//find by name
module.exports.getMovieByName= function(title,callback){
  Movie.find({'Title': new RegExp(`^${title}$`,"i") }, callback);
};

/*----------------------------------------------------------*/


//add movie
module.exports.addMovie= function(movie, callback){
  Movie.create(movie, callback);
}
