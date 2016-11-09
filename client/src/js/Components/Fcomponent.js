var React = require('react');
var Fmoviebox = require('./Fmoviebox.js');
var Fcomponent = React.createClass({
render: function (){
 var movarr=this.props.moviedata.map(function(movie){
 return(
   <Fmoviebox
    valuedata={movie}
    key={movie.imdbID}
    >
    </Fmoviebox>
  );
   }.bind(this));
    return (
      <div className="movieList">
      {movarr}
   </div>
 );
}
});
module.exports=Fcomponent;
