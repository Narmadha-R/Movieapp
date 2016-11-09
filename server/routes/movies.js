var express = require('express');
var router = express.Router();

var movies=require('../models/movies');
router.route("/add")
.post(function(req,res) {
  if(req.body) {
  var movievar=new movies();
  movievar.Title=req.body.Title;
  movievar.Year=req.body.Year;
  movievar.imdbID=req.body.imdbID;
  movievar.Type=req.body.Type;
  movievar.Poster=req.body.Poster;
  movievar.save(function(err){
  if(err) {
    res.send(err);
    console.log("error occured");
  }
  else  {
  res.send("Movie added successfully");
  console.log("movie added");
  }
    });
  }
  });


  router.route("/delete/:imdbID")
  .delete(function(req,res) {
    var request=req.params.imdbID;
    console.log(request);
    console.log("hello");
    if(request)
    {
      movies.remove({imdbID:request},function(err){
        if(err) {
          res.send(err);
        }
        else  {
        res.send("movies deleted");
        }
      });
    }
  });




  router.route("/update")
  .put(function(req,res) {

    console.log(req.body);
    if(req.body)
    {

    movies.update({imdbID:req.body.imdbID},{$set:{Title:req.body.Title}},function(err){
  console.log(req.body.imdbID);
   console.log(req.body.Title);
        if(err) {
          res.send(err);
        }
        else  {
        res.send("movies updated");
        }
      });
    }
  });

  router.route("/")
  .get(function(req,res){
    movies.find({},function(err,moviesall){
      if(err) {
        res.send(err);
        console.log('error ocuured');
      }
      else {

console.log("all movies get displayed");
console.log(moviesall);
        var moviess={};
        moviesall.forEach(function(moviee){
          moviess[moviee._id]=moviee;
        });
        res.send(moviess);
      }
    });
});
module.exports = router;
