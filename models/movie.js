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
