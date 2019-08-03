import React from 'react';

const InputText = ( props ) => (
    <div>
        <input placeholder="What else?" />
        <button onClick={props.clicked}> + </button>
    </div>
)

export default InputText;