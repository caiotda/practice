import React, { useEffect, useRef }  from 'react';
import Style from './TodoItem.module.css'

const ToDoItem = props => {


    const myRef = useRef();
    
    useEffect( () => {
        myRef.current.checked = props.done;
    })

    let styleTask;
    props.done ?  styleTask = Style.doneTask : styleTask = Style.task;

    return (
        <li 
            className={styleTask}
        >
            {props.item}
            <input
                onClick={() => props.clicked(props.index)}
                type="checkbox"
                ref={myRef}
            />
        </li>
    )
}

export default ToDoItem;