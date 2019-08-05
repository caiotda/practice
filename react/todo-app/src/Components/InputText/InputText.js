import React, { useEffect } from 'react';


const InputText = ( props ) => {
    
    useEffect( () => {
        const input = document.querySelector('input');
        input.value = '';
    });

    return (
        <form>
            <input placeholder="What else?" />
            <button onClick={props.clicked} type="submit"> + </button>
        </form>
    )
}

export default InputText;