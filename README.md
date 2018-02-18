# MovieBase

## Content

REST API based movie database interacting with an external service API: http://www.omdbapi.com/

## Technologies

* NodeJS  
* ExpressJS
* MongoDB
* Request

## Specification of endpoints:

### POST /movies
Based on a given title the movie details are fetched from the remote service and saved to the application database.
Request body shape:
```
{"movieTitle":"braveheart"}
```

* if ok, response:
```
status 200, {body}
```
* if the request validation fails due to the movie title not being present, the following is returned:
```
status 400, msg:'movie title is required'
```

* if the given movie does not exist in the remote db, return the following:
```
status 204, 'movie not found'
```

* if the given movie already exists in our db, return:
```
status 409 , msg: 'movie movieTitle is already exist'
```



### GET /movies
Fetch list of all movies already present in the application database.
Query with, or without parameters:

* without params:
fetch list of all movies already present in the application database

* with params:
fetch list of movies:
```s=u```   sorted by title, ascending
```s=d```   sorted by title, descending

```c=categoryName``` list of the movies matching the given category

example:
```
.../movies?s=u&c=action
```

### POST /comments
The comment gets saved to our DB.

Request body:
```
{"movie_id":"movieID" , "comment":"..text.."}
```
movie_id - ID of a movie already present in the local database

both of the params are required,

* if the request body is incorrect - return:
```
status 400; msg: invalid req
```

* if ok, the comment is returned.


### GET /comments
Fetch the list of all comments present in the application database.
Query with or without parameters.

* Without parameters:
fetch the list of all comments present in the application database

* With parameter:
fetch the list of all comments for the movie with id=movieId

```
id=movieId
```

example:
```
.../comments?id=5a86c07d0dfcaa23c4ddc1d5
```


## How to use

Regardless of whether it will run on a local machine or on the server, you need an ApiKey from http://www.omdbapi.com/

### ApiKey
An api key for the external api request is required. In folder config you have to create key.js file with following content:

```
module.exports={key:'xxxxxxxx'}
```

where xxxxxxxx is your own api key

### DataBase Settings
MongoDB settings you can find in the database.js file in the config folder.


## Installation on your local machine

1. Prerequisites:

- nodejs and npm
- MongoDB

2. Install all dependencies

```
npm install
```
3. Run app.js..

## Testing
The API can be consumed using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop)
