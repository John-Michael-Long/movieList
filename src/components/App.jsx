class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: this.props.movies
    }
  }

  handleMovieClick(event){
    console.log(event)
  }

  render(){
    return (
      <center>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3"> Search Bar </div>
        </nav>
          <div className = "movieListClass">
            <MovieList movies={this.props.movies} />
          </div>
      </center>
    )
  }
}

App.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.App = App;

//  onMovieClick={this.handleMovieClick.bind(this)

  //  <div className="col-md-7">Video Player</div>