var React = require('react');
var ReactDOM = require('react-dom');
var {hashHistory, Route ,Router,IndexRoute} = require('react-router');
var NavibarChild = require('./Components/NavibarChild.js');
var MovieMain= require('./Components/MovieMain.js');
var FavouriteMovie = require('./Components/FavouriteMovie.js');
var AboutUsChild = require('./Components/AboutUsChild.js');
var ContactUsChild = require('./Components/ContactUsChild.js');


var MainComponent = React.createClass({

  render: function(){
    return (
      <div>
        <NavibarChild />
        {this.props.children}
      </div>
    )
  }
});

ReactDOM.render(
  <Router history ={hashHistory}>

     <Route path = "/" component={MainComponent} >
    <IndexRoute component={MainComponent} />
     <Route path = "/MovieMain" component={MovieMain} />
      <Route path = "/FavouriteMovie" component={FavouriteMovie} />
      <Route path = "/AboutUsChild" component={AboutUsChild} />
        <Route path = "/ContactUsChild" component={ContactUsChild} />

    </Route>
  </Router>,document.getElementById('app'));
