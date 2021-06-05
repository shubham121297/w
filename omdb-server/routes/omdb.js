var express = require('express');
var router = express.Router();
const axios=require('axios');
const apiKey='ee243636';

/* GET users listing. */
router.get('/search', function(req, res, next) {
    const search=req.query.title;
    const url=`http://www.omdbapi.com/?apikey=${apiKey}&s=${search}`;
    axios.get(url)
  .then(function (response) {
    // handle success
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    res.send(error);
  })
});

router.get('/result/:imdbID', function(req, res, next) {
    const imdbID=req.params.imdbID;
    const url=`http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    axios.get(url)
  .then(function (response) {
    // handle success
    res.send(response.data);
  })
  .catch(function (error) {
    // handle error
    res.send(error);
  })
  });

module.exports = router;
