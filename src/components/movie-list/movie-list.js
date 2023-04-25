import MovieListItem from "../movie-list-item/movie-list-item";
import "./movie-list.css";

const MovieList = () => {
  return (
    <div className="movie-list">
      <MovieListItem />
      <MovieListItem />
      <MovieListItem />
    </div>
  );
};

export default MovieList;
