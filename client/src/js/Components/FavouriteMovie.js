var React=require('react');
var ReactDOM=require('react-dom');

var Fcomponent=require('./Fcomponent.js');

var FavouriteMovie=React.createClass({

  getInitialState : function()
  {
    return{
      mongodata : []
  };
},
handleUpdate:function(imdbID,Title){
 console.log(imdbID+" "+Title);
 var movieData=this.state.data;
 var index=movieData.findIndex(function(element){
   return element.imdbID===imdbID;
 });
 if(index!==-1){
   movieData[index].Title=Title;
   this.setState({data:movieData});
 }
},

retriveData  : function() {

   $.ajax({
   url:"http://localhost:8080/movies/",
   type: 'GET',
   dataType:'JSON',

   success: function(data1)
   {
     this.setState({mongodata:Object.values(data1)});
     console.log("inside success");

    //  console.log(JSON.stringify(data1));
   }.bind(this),
   error: function(err)
   {

     console.log(err);
   }.bind(this)
 });

 },
 componentDidMount : function()
 {
   this.retriveData();
 },
render: function(){
   return (
     <div>
     <Fcomponent moviedata={this.state.mongodata} update={this.handleUpdate} />
    </div>
   )
 }
})

module.exports=FavouriteMovie;
