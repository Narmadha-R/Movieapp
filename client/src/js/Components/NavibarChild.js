var React = require('react');

var {Link} = require('react-router');

var NavibarChild = React.createClass({
  render: function(){
    return (
      <div className="container-fluid">
      <ul className ="nav navbar-nav" >

    <li><Link to ="/MovieMain">Home</Link></li>
      <li><Link to ="/FavouriteMovie">FavouriteMovie</Link></li>
      <li ><Link to ="/AboutUsChild">About us</Link></li>
      <li><Link to ="/ContactUsChild">Contact</Link></li>

      </ul>
      </div>
    )
  }
});
module.exports = NavibarChild;
