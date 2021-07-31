import './App.css';
import React,{useState} from 'react';

import {List} from './Component/Movies.js';
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
    <div className='container' >
          <div>
            <Filter handleSearch = {handleSearch}/>
          </div>
          <div className='row mt-3'>
          {filterList.map( (movie) => {
            return <MovieCard movie ={movie}/>
          }

          )}
          </div>
          
          
    </div>
  );
}

export default App;
