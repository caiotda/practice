import React from 'react';

const ToDoItem = props => (
        <li onClick={ () => props.clicked(props.index)}>
            {props.item}
            <button onClick={() => props.clicked(props.index)}> - </button>
        </li>
)

export default ToDoItem;