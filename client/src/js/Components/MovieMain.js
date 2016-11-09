var React=require('react');
var ReactDOM=require('react-dom');
var SearchForm=require('./SearchForm.js');
var ContainerComponent=require('./ContainerComponent.js');

var MovieMain=React.createClass({

  getInitialState : function()
  {
    return{
      data : []
  };
},

 retriveData : function(title) {
   console.log(title);
   console.log("inside data method");
   $.ajax({
   url:"http://www.omdbapi.com/?s="+title,
   type: 'GET',
   dataType: 'JSON',

   success: function(data)
   { console.log("inside success");
     this.setState({data:data.Search});
     console.log(data.Search);
      console.log(JSON.stringify(data.Search));
   }.bind(this),
   error: function(err)
   {

     console.log(err);
   }.bind(this)
 });

 },

 render: function(){
   return (
     <div>
     <SearchForm getMethod={this.retriveData}/>
     <ContainerComponent moviedata={this.state.data} />
     </div>

   )
 }
})

module.exports=MovieMain;
