import React from 'react'

import Styles from './Button.module.css'

export default function Button(props) {
    return (
        <button 
            className={Styles[`${props.btnClass}`]}
            onClick={props.click}>
            {props.children}
        </button>
    )
}