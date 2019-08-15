import React, { useState } from 'react';
// import logo from './logo.svg';
import ToDo from './Components/toDo/ToDo'
import Header from './Components/Header/Header'
import './App.css';

function App() {

  const [toDoList, updateToDoList] = useState([{value: 'Study React', done: false}]);
  const [doneList, updateDoneList] = useState([]);


  const cleanDoneTasks = () => {
    const clone = [...toDoList];
    const newTodo = clone.filter(item => !item.done);
    const newDoneTasks = clone.filter(item => item.done); // preciso preencher com as tarefas que ja estavam prontas, puxo do estado
    const doneTasks = [...doneList].concat(newDoneTasks);
    console.log(newTodo, doneTasks);

    updateToDoList(newTodo);
    updateDoneList(doneTasks);
  }
  return (
    <main className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      <Header 
        title="toDo"
        count={toDoList.length}
      />
      <ToDo 
        list={toDoList}
        updateList={updateToDoList}
        cleanDoneTasks={cleanDoneTasks}
      />


      </header>
    </main>
  );
}

export default App;
