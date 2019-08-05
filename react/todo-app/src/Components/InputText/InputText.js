import React, { useEffect } from 'react';
import Style from './InputText.module.css'


const InputText = ( props ) => {
    
    useEffect( () => {
        const input = document.querySelector('#clear');
        input.value = '';
    });

    return (
        <form className={Style.form}>
            <input type="text" id="clear" placeholder="What else?" className={Style.input}/>
            <button onClick={props.clicked} type="submit"> + </button>
        </form>
    )
}

export default InputText;