const express = require ('express');
const router = express.Router();
const config = require('../config/database');

const Comment  = require('../models/comment');
const Movie  = require('../models/movie');

/*-----------------------get-----------------------------------*/
router.get('/',(req,res)=>{
	Comment.getComments((err,dataz)=>{
		if(err){
			throw err;
			console.log(err);
		}
		res.json(dataz);
	});
});

/*-----------------------post-----------------------------------*/

router.post('/',(req,res)=>{

});

/*----------------------------------------------------------*/
module.exports= router;
