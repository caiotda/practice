import React from 'react';
import Style from './Header.module.css'

const Header = ( props ) => {
    return(
        <header className={Style.header}>
                <h1>{props.title}</h1>
                <h2>{props.count}</h2>
        </header>
    )
}


export default Header;