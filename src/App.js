import './App.css';
import React from 'react';
import SearchMovie from './SearchMovie';


function App() {
  return (
    <div className="container">
      <header className="App-header">
      <h1 className="title">
          Movie Search App
        </h1>
        <SearchMovie/>
      </header>
    </div>
  );
}

export default App;

