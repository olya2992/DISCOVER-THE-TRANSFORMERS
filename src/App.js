import React from 'react';
import { useState } from 'react';
import { data } from './data';

import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Characters from './Characters'
import Universe from './Universe';
import Movies from './Movies';


function App() {
  return(
 
    <Router>
      <nav>
        <Link to = '/' className='link' > Characters </Link>
        <Link to ='/universe' className='link'>Universe</Link>
        <Link to ='/movies' className='link'>Movies</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Characters/>}/>
        <Route path='/universe' element={<Universe/>}/>
        <Route path='/movies' element={<Movies/>}/>
      </Routes>
    </Router>
  )
}

export default App;



