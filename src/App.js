import './App.css';
import React,{useState} from 'react';

import {List} from './Component/Movies.js';
import MovieList from './Component/MovieList';
import MovieCard from  './Component/MovieCard';
import Filter from './Component/Filter.js';


function App() {

  const [searchMovie ,setSearchMovie] = useState('');

  const handleSearch= (e) =>{
    setSearchMovie (e.target.value);
  }

  const filterList = List.filter((movie)=>
  movie.title.toLowerCase().includes(searchMovie.toLowerCase())
  );


  return (
    <div className="main-container">
          <div>
            <Filter handleSearch = {handleSearch}/>
          </div>
          {filterList.map( (movie) => {
            return <MovieCard movie ={movie}/>
          }

          )}
    </div>
  );
}

export default App;
