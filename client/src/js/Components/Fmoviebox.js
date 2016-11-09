var React = require('react');

var Fmoviebox = React.createClass({



  updateTitle: function(t)
  {
    console.log('typing...');
    this.setState({title: t.target.value});
  },
  handleUpdateMovie: function()
  {

      var newTitle=this.state.title;
      alert(newTitle);
      var movieObject = {};
      movieObject.Title = this.state.title;
      movieObject.imdbID=this.props.valuedata.imdbID;

      $.ajax({
       url:"http://localhost:8080/movies/update",
       type: 'PUT',
       dataType: 'JSON',
       data: movieObject,
       success: function(message)
             {
               console.log("Movie updated");

               this.props.update(movieObject.imdbID, movieObject.Title);
             }.bind(this),
             error: function(err)
             {
               console.log(err);
             }.bind(this)
           });
        },

handleDeleteMovie: function()
{
  console.log("Delete clicked");
  var id=this.props.valuedata.imdbID;
  console.log(id);
  $.ajax({
 url:"http://localhost:8080/movies/delete/"+id,
  type: 'DELETE',

  success: function(data)
  {
    console.log("inside success");
    alert('deleted Successfully');
   }.bind(this),
  error: function(err)
  {
    console.log(err);
  }.bind(this)
});
},


render : function()
{
  var id="#"+this.props.valuedata.imdbID;
  console.log(id);

return (


   <div className="movie">
           <h2 className="movieName"> </h2>
           <div className="well">
               <div className="row">
                   <div className="col-4">
                       <img className="thumbnail" src={this.props.valuedata.Poster}/>
                   </div>
                     <div className="col-8">
                         <h4>{this.props.valuedata.Title}</h4>
                         <ul className='list-group'>
                             <li className='list-group-item'>Year Released : {this.props.valuedata.Year}</li>
                             <li className='list-group-item'>IMDB Id : {this.props.valuedata.imdbID}</li>
                         </ul>



             <a href={id} className='btn btn-success' data-toggle="modal">Update</a>
                                      <div className="modal fade"  id={this.props.valuedata.imdbID}>
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header" id="modalheader">

                                                            <button className="close" data-dismiss="modal">&times;</button>
                                                            <h4 className="modal-title">Update Title</h4>

                                                        </div>
                                                        <div className="modal-body">

                                                            <form className="form-horizontal">
                                                                <div className="form-group">
                                                                    <label className="col-lg-2 control-label">Title:</label>
                                                                    <div className="col-lg-10">
                                        															<input className="form-control" id="title" placeholder="Enter title to update....." type="textfield" onChange={this.updateTitle}/>
                                        														</div>
                                                                </div>

                                                                <div className="form-group">
                                                                    <div className="col-lg-10">
                                                    <button className="btn btn-success" data-dismiss="modal" type="button">Close</button>
                                                    <button className="btn btn-success" type="button" onClick={this.handleUpdateMovie}>Save</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>




                      <button className="btn btn-success" onClick={this.handleDeleteMovie}>Delete</button>
                     </div>
               </div>
           </div>
       </div>
);
}

});

module.exports=Fmoviebox;
