import React, { Component } from 'react';
import Cell from './Cell/Cell'
import './App.css';


class App extends Component {

  state = {
    clickCounter: 0,
    table: [['','',''],['','',''],['','','']],
    hasWinner: false,
    velha: false,
    winner: false
  }

  inputPlayHandler = (i, j) => {
    
    if (this.state.table[i][j] === '' && !this.state.hasWinner) {
      let conteudo, table, clickCounter;
      clickCounter = this.state.clickCounter;
      table = [...this.state.table];

      if(this.state.clickCounter % 2 === 0)
        conteudo = 'X'
      else
        conteudo = 'O'

      clickCounter++;
      table[i][j] = conteudo;

      this.setState( {clickCounter, table} )
      this.checkGameGandler();
    }

  }

  checkGameGandler = () => {
    if(this.state.clickCounter === 8 && !this.state.hasWinner)
      this.setState( {velha: true} )
    else {
      let win = false;
      let current;

      // -------------- HORIZONTAL ----------------
      for(let i = 0; i < 3 && !win; i++){
        current = this.state.table[i][0];
        for(let j = 0; j < 3; j++){
          win = this.state.table[i][j] === current && current !== '';
          current = this.state.table[i][j];
        }
      }

      // --------------VERTICAL---------------------
      for(let j = 0; j < 3 && !win; j++){
        current = this.state.table[0][j];
        for(let i = 0; i < 3; i++){
          win = this.state.table[i][j] === current && current !== '';
          current = this.state.table[i][j];
        }
      }

      if(this.state.table[0][0] === this.state.table[1][1] && this.state.table[1][1] === this.state.table[2][2] && this.state.table[0][0] !== '')
        win = true;

      current = this.state.table[2][0]
      for(let i = 0; i<3; i++){
        win=this.state.table[2-i][i] === current && current !== '';
        current = this.state.table[2-i][i];
      }

      this.setState({winner: win})

    }
    // else {
    //   const value = [...this.state.value];
      
    //   if( (value[0] === value[1] && value[1] === value[2]) || (value[3] === value[4] && value[4] === value[5]) || (value[6] === value[7] && value[7] === value[8]) || (value[0] === value[3] && value[3] === value[6]) || (value[1] === value[4] && value[4] === value[7]) || (value[2] === value[5] && value[5] === value[7]) || (value[2] === value[4] && value[4] === value[6]) ){
    //     const hasWinner = true;
    //     const winner = (this.state.clickCounter%2 === 0) + 1;
    //     this.setState( {hasWinner, winner} );
    //   }
    // }
  }

  resetGameHandler = () => {
    const clickCounter = 0;
    const table = [['','',''],['','',''],['','','']];

    this.setState( {clickCounter, table, velha: false} )
  }
  
  render() {// j * (i + 1)
    let board = [];
    let velha = null;
    for(let i = 0; i < 3; i++)
      for(let j = 0; j < 3; j++)
          board.push(<Cell click={() => this.inputPlayHandler(i, j)}
                            key={i*3+j} 
                            cont={this.state.clickCounter}
                            value={this.state.table[i][j]}/>);
    
    if(this.state.velha === true)
      velha = <strong>Deu velha!</strong>
    else
      velha = null;

    return(
      <div className="app">
        <h1>TicTacToe</h1>
        <div className="board">
          {board}
        </div>
        <button onClick={this.resetGameHandler}>Reset</button>
        {velha}
      </div>
      )
    }
  }
  export default App;
