import React from "react";
import { movies } from "../data";

function Movies() {
  const myMovies = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      Time: {movie.time}
      <ul>
        Genres:
        {movie.genres.map((mov) => (
          <li key={mov}>{mov}</li>
        ))}
      </ul>
      
    </div>
  ));
  return (
    <div>
      <div>
        <h1>Movies Page</h1>
      </div>
      {myMovies}
    </div>
  );
}

export default Movies;
