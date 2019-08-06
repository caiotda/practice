import React, { useState } from 'react';
// import logo from './logo.svg';
import ToDo from './Components/toDo/ToDo'
import Header from './Components/Header/Header'
import './App.css';

function App() {

  const [list, updateList] = useState([{value: 'Study React', done: false}]);

  return (
    <main className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header 
        title="toDo"
        count={list.length}
      />
      <ToDo 
        list={list}
        updateList={updateList}
      />

      </header>
    </main>
  );
}

export default App;
