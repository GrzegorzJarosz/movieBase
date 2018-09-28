const express = require ('express');
const router = express.Router();
const Movie  = require('../models/movie');
const MovieController = require('../controllers/MovieController');


/*-----------------------get-----------------------------------*/

router.get('/', MovieController.getMovies);

/*-----------------------post-----------------------------------*/
router.post('/', MovieController.ask_addMovie);

/*----------------------------------------------------------*/
module.exports= router;
