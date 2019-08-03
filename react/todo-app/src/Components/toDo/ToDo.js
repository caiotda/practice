import React, { useState, Fragment } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem'
import Style from './ToDo.module.css'

const ToDo = (props) => {

    const [list, updateList] = useState(['Limpar a casa', 'Estudar React']);

    const removeTaskHandler = (index) => {
        console.log(index);
        let newList = [...list];
        newList.splice(index, 1);
        updateList(newList);
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

                <input placeholder="What else?" />
            </div>
        </Fragment>
    )
}

export default ToDo;