import React from 'react';
import './Cell.css';

const cell = (props) => {
    
    return (
        <div className="cell" onClick={props.click}>
            {props.value}
        </div>
    )
}

export default cell;