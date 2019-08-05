import React, { useState, Fragment } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import InputText from '../InputText/InputText';
import Style from './ToDo.module.css';

const ToDo = (props) => {

    const [list, updateList] = useState(['Limpar a casa', 'Estudar React']);

    const removeTaskHandler = (index) => {
        let newList = [...list];
        newList.splice(index, 1);
        updateList(newList);
    }

    const addTaskHandler = (e) => {
        e.preventDefault(); // prevents form from refreshing the page
        const text = e.target.parentNode.firstChild.value;

        if (text.length > 0) {
            const newList = [...list];
            newList.push(text);
            updateList(newList);
        }
    }

    let toDo = list.map( (task, index) => 
        <ToDoItem 
            item={task}
            clicked={removeTaskHandler}
            key={index}
            index={index}
        />
    )
    return (
        <Fragment>
            <div className={Style.listContainer}>
                <h1>ToDo list</h1>  
                <ol>
                    {toDo}
                </ol>
                <InputText 
                    clicked={addTaskHandler}
                />
            </div>
        </Fragment>
    )
}

export default ToDo;