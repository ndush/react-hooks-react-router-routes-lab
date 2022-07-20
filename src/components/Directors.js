import React from "react";
import { directors } from "../data";

function Directors() {
  const movieDirectors = directors.map((director) => (
    <div key={director.name}>
      <h2>Name: {director.name}</h2>
      <ul>
        Movies:
        {director.movies.map((movieList) => (
          <li key={movieList}>{movieList}</li>
        ))}
      </ul>
    </div>
  ));
  return (
    <div>
      <div>
        <h1>Directors Page</h1>
      </div>
      {movieDirectors}
    </div>
  );
}

export default Directors;
