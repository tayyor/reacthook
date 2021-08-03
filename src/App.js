import React from 'react';
import {Switch , Route} from 'react-router-dom';

import  MovieLibrary from './Component/movieLib.js';
import Routing from './Component/Routing.js';
import {List} from './Component/Movies';

function App() {
  return (
    <div>
    
        <Switch>
          <Route exact path="/" component={MovieLibrary} />
          <Route
            exact
            path="/routing/:id"
            component={Routing}
          />
        </Switch>
    </div>
  )
}

export default App
