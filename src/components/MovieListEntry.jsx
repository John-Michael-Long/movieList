const MovieListEntry = (props) => (

   <div className="movie-list-entry media">
    <div className="media-body">
      <div className="movie-list-entry-title">
      {props.movie.title}
      </div>
    </div>
  </div>

  )

//<img className="media-object" src={props.movie.snippet.thumbnails.default.url} alt="" />
// <div className="movie-list-entry-detail">{props.movie.snippet.description}</div>

MovieListEntry.propTypes = {
  movie: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.MovieListEntry = MovieListEntry;


// <div className="media-left media-middle">Thumbnail Goes Here</div>

// onClick={() => { props.onMovieClick(props.movie); }}