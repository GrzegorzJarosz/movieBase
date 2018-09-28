const express = require ('express');
const router = express.Router();
const Comment  = require('../models/comment');
const Movie  = require('../models/movie');
const CommentsController = require('../controllers/commentsController');

/*-----------------------get-----------------------------------*/
router.get('/', CommentsController.getComments);

/*-----------------------post-----------------------------------*/

router.post('/',CommentsController.addComment);

/*----------------------------------------------------------*/
module.exports= router;
