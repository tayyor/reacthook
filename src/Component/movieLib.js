import React,{useState} from 'react';

import {List} from './Movies.js';
import MovieCard from  './MovieCard';
import Filter from './Filter.js';



 const MovieLibrary = ()  =>{

  const [searchMovie ,setSearchMovie] = useState('');

  const handleSearch= (e) =>{
    setSearchMovie (e.target.value);
  }

  const filterList = List.filter((movie)=>
  movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );


  return (
    <div 
    className='container'
    style = {{backgroundColor:`goldenrod`}} >
          <div>
            <Filter handleSearch = {handleSearch}/>
          </div>
          <div className='row mt-3'>
          {filterList.map( (movie) => {
            return <MovieCard movie ={movie}/>
          }
          )};
          </div>
          
          
    </div>
  );
}

export default MovieLibrary;
