import { createRandomMovie } from "../data";
import { useDispatch, useSelector } from "react-redux";
import { addMovie, removeMovie } from "../store";

export default function MovieList() {
  const dispatch = useDispatch();
  // Get list of movies
  const movies = useSelector((state) => {
    return state.movies;
  });

  const handleMovieAdd = (movie) => {
    dispatch(addMovie(movie));
  };

  const handleMovieDelete = (movie) => {
    dispatch(removeMovie());
  };

  return (
    <div className="movie-list-wrapper">
      <div className="movie-list">
        <h2 className="text-[40px]">Movie List</h2>
        <button onClick={() => handleMovieAdd(createRandomMovie())}>
          +Add Movie
        </button>
      </div>
      {/* Show the Movie List Below */}
      {movies.map((movie) => {
        return (
          <div
            className="movie-detail"
            key={movie}
          >
            <p>{movie}</p>
            <button
              className="bg-[orange] mt-2"
              onClick={() => handleMovieDelete(movie)}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}
