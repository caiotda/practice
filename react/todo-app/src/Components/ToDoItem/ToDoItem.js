import React from 'react';
import Style from './TodoItem.module.css'



const ToDoItem = props => {

    let styleTask;
    props.done ?  styleTask = Style.doneTask : styleTask = Style.task;

    return (
        <li 
            className={styleTask}
        >
            {props.item}
            <input
                onClick={() => props.clicked(props.index)}
                type="checkbox"></input>
        </li>
    )
}

export default ToDoItem;