import React from "react";
import { actors } from "../data";

function Actors() {
  const movieActors = actors.map((actor) => (
    <div key={actor.name}>
      <h2>Name: {actor.name}</h2>
      <ul>
        Movies:
        {actor.movies.map((movie) => (
            <li key={movie}>{movie}</li>
         ))}
       </ul>
    </div>
  ));
  return (
    <div>
      <div>
        <h1>Actors Page</h1>
      </div>
      {movieActors}
    </div>
  );
}


export default Actors;
