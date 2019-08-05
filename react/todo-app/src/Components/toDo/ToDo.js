import React, { useState, Fragment } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import InputText from '../InputText/InputText';
import Header from '../Header/Header'
import Style from './ToDo.module.css';

// TODO : mover o estado pro App.js

const ToDo = (props) => {

    const [list, updateList] = useState([{value: 'Study React', done: false}]);

    const removeTaskHandler = (index) => {
        console.log('To sendo chamado!');
        let newList = [...list];
        console.log(newList[0]);
        newList[index].done = !newList[index].done;
        updateList(newList);
    }

    const addTaskHandler = (e) => {
        e.preventDefault(); // prevents form from refreshing the page
        const text = e.target.parentNode.firstChild.value;

        if (text.length > 0) {
            const newList = [...list];
            newList.push({value: text, done: false});
            updateList(newList);
        }
    }

    let toDo = list.map( (task, index) => 
        <ToDoItem 
            item={task.value}
            clicked={removeTaskHandler}
            key={index}
            index={index}
            done={task.done}
        />
    )
    return (
        <Fragment>
            <Header
              title="ToDo"
              count={list.length}
            />
            <div className={Style.listContainer}>
                <ul className={Style.list}>
                    {toDo}
                </ul>
                <InputText 
                    clicked={addTaskHandler}
                />
            </div>
        </Fragment>
    )
}

export default ToDo;