var React = require('react');

var SearchForm = React.createClass({

  getInitialState : function()
  {
    return{
      title :''
    };
},
getTitle : function(arr)
{
  this.setState({title:arr.target.value});
},
 movie: function(){

    console.log(name);
     this.props.getMethod(this.state.title);
 },

render: function (){
  return(
   <div>
     <input className="txtdesign"  type="text" id="search" placeholder="Search Movie By Title......" onChange={this.getTitle}/>
     <input className="design" type="button" value="search" onClick={this.movie} />
   </div>
  )
}
})
module.exports=SearchForm;
