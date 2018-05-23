class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieListDisplay: this.props.movies,
      inputString: '',
      searchString: ''
    }
  }

  filterList() {
    let temp = []
    for (let i = 0; i < this.props.movies.length; i++) {

      let movie = this.props.movies[i]
      if ( movie.title.includes(this.state.searchString) ) {

        temp.push(movie)
      }

      if(temp.length === 0) {
        temp.push({title: "no movie by that name found"});
      }
    }
    return temp;
  };

  handleSearchClick(event){
    this.setState({
      searchString: this.state.inputString,
      movieListDisplay: this.filterList()
    })
    
  }

  handleTextChange(event) {
    this.setState({
      inputString: event.target.value
    });
    console.log('inputString Change:', this.state.inputString)
  }

  handleSubmitClick(event){
    console.log('click!!!!')
  }


  render(){
    return (
      <center>
        <nav className="navbar">
          <div>
            <EnterMovie
            onEntryClick={this.handleSubmitClick.bind(this)}/>
          </div>
          <div className="col-md-6 offset-md-3"> 
            <Search 
            onSearchClick={this.handleSearchClick.bind(this)} 
            onTextChange={this.handleTextChange.bind(this)} 
            inputString={this.state.inputString} />
          </div>
        </nav>
          <div className = "movieListClass">
            <MovieList movies={this.state.movieListDisplay} />
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