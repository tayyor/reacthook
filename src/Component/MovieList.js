import React from "react";


import MovieCard from "./MovieCard";


const MovieList = ({ moviesArray }) => {
  return (
      <div>
          {
              moviesArray.map((movie,key) =>(
                  <MovieCard 
                    movie={movie}
                    key ={key}
                  />
              ))
          }
      </div>
  );
};

export default MovieList;
