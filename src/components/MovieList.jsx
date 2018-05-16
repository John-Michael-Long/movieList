var MovieList = (props) => (
  //what does this first below line do????
  <div className="movie-list">  
  {props.movies.map((movie, index) => 
    <MovieListEntry movie={movie} key={index} />) }
  </div>
);
  //if props.movies exists then for each movie, map a function 
  // that takes (movie) as parameters and 
  //  returns an html node called MovieListEntry, and pass 
  //  it an onClick function  = props.onMovieClick
  //else: return default loading div

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.MovieList = MovieList;


// onMovieClick={props.onMovieClick}