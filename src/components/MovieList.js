import React from "react";

export default function MovieList() {
  // Get list of movies
  const movies = [];
  return (
    <div className="movie-list-wrapper">
      <div className="movie-list">
        <h2>Movie List</h2>
        <button>+Add Movie</button>
      </div>
      {/* Show the Movie List Below */}
      {movies.map((movie) => {
        return (
          <div className="movie-detail">
            <p>{`Movie Name`}</p>
            <button>X</button>
          </div>
        );
      })}
    </div>
  );
}
