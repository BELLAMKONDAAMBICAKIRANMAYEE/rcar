import React from 'react'
import About from './About'
import './App.css';
import Blog from './Blog'
import 'bootstrap/dist/css/bootstrap.min.css';
import Car from './Car'

function App() {
  return (
    <div className="App">
    <About/> 
    <Blog/>
    <Car/>
    </div>
  );
}

export default App;
