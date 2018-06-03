const Request = require("request");

/*
{key:'xxxxxxxxx'}
*/

//getMovieRemote
module.exports.getMovieRemote = function(title){
	let url=`http://www.omdbapi.com/?t=${title}&apikey=${process.env.key}`;

	return new Promise(function(res, rej){

		Request.get(url, (error, response, body)=>{
			if(error){rej(error);}
			if(body){res(body);}
		});
	})
};
