var should = require("chai").should(),
// expect = require("chai").expect,
// assert = require("chai").assert,
supertest = require("supertest"),
app = require("../app");

var url = supertest("http://localhost:8080");

describe("Testing 1st route", function(err){
  it("Retrive the data", function(done){
    url
        .get("/movies")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err,res){
          should.not.exist(err);
          var myObj = JSON.parse(res.text);
        //  var fresult=Object.values(myObj);

//console.log(fresult);
          //console.log(res.text);
          var result=0;
      //    var fresult=Object.values(myObj);

       var result=Object.keys(myObj).map(function(key)
     {
       return myObj[key];
     });


         result[0].Title.should.be.equal("Sultan");


          done();
        });

  });
});
describe("Testing 2nd route", function(err){
  it("Post the data", function(done){
    url
        .post("/movies/add")
        .send({"Title":"Batman v Superman: Dawn of Justice","Year":"2016","imdbID":"tt2975590","Type":"movie","Poster":"https://images-na.ssl-images-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"})
        .expect(200)

        .end(function(err,res){

       res.text.should.equal("Movie added successfully");
done();
        });

  });
});
describe("Testing 3rd route", function(err){
  it("delete the data", function(done){
    url
        .del("/movies/delete/tt2975590")

       .expect(200)

      .end(function(err,res){

       res.text.should.equal("  movies deleted");
       done();
        });

  });
});
describe("Testing 4th route", function(err){
  it("update the data", function(done){
    url
        .put("/movies/update")
        .send({"Title":"Superman","imdbID":"tt2975590"})
       .expect(200)

      .end(function(err,res){

       res.text.should.equal("movies updated");
       done();
        });

  });
});
