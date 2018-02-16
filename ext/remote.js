const Request = require("request");
const apiKey = require('./config/key');

/*
{key:'xxxxxxxxx'}
*/

//getMovie
module.exports.getMovie = function(title){
	let url=`http://www.omdbapi.com/?t=${title}&apikey=${apiKey.key}`;

	return new Promise(function(res, rej){

		Request.get(url, (error, response, body)=>{
			if(error){rej(error);}
			if(body){res(body);	}
		});
	})
};
