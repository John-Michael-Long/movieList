class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: this.props.movies,
      inputString: '',
      searchString: ''
    }
  }

  handleSearchClick(event){
    this.setState({
      searchString: this.state.inputString
    })
    console.log('searchString:', this.state.searchString)
    var displayMovieList;

    for (let movie in this.props.movies) {
      
      console.log('movie: ', movie)
      if ( movie.title.includes(this.state.searchString)) {
        displayMovieList.push(movie)
      }
    }
    this.setState({
      movieList: displayMovieList
    })
    console.log(this.state.movieList)
  }

  handleTextChange(event) {
    this.setState({
      inputString: event.target.value
    });
    console.log('inputString Change:', this.state.inputString)
  }



  render(){
    return (
      <center>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3"> 
            <Search 
            onSearchClick={this.handleSearchClick.bind(this)} 
            onTextChange={this.handleTextChange.bind(this)} 
            inputString={this.state.inputString} />
          </div>
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