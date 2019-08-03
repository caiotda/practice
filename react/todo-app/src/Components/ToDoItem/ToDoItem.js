import React from 'react';

const ToDoItem = props => (
        <li>
            {props.item}
            <button onClick={() => props.clicked(props.index)}> - </button>
        </li>
)

export default ToDoItem;