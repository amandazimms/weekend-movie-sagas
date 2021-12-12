const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {  
  const queryString = ` SELECT genres.name FROM movies_genres 
  JOIN genres ON genres.id = movies_genres.genre_id
  JOIN movies on movies.id = movies_genres.movie_id
  WHERE movies_genres.movie_id=${req.query.id}`;

  pool.query(queryString)
    .then(result=>{
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get genres', err);
      res.sendStatus(500)
    })
});


router.get('/', (req, res) => {

  const query = `SELECT * FROM movies ORDER BY "title" ASC`;
  pool.query(query)
    .then( result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Get all movies', err);
      res.sendStatus(500)
    })

});

module.exports = router;