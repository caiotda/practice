import React, { useState } from 'react'

import Timer from './Timer/Timer'
import style from './TomatoTimer.module.css'
import Button from '../Button/Button'

const TomatoTimer = (props) => {

    const [started, toggleStarted] = useState(false);
    const [paused, togglePaused] = useState(true);
    const [time, setTime] = useState(25);

    /* "Por que não usar uma variavel de função ao inves
    de definir uma variavel de estado com useState? Não é 
    overkill?" Na verdade, não. O que acontece é que, 
    devido ao funcionamento do React, o componente só é 
    re-renderizado na DOM caso aconteça uma mudança no 
    estado ou nas props. Se eu fizer uma variavel 
    normalize, uma mudança nela não causaria uma re 
    renderização */


    const firstText = started ? "Stop" : "Start"
    const secondText = paused ? "Pause" : "Continue"

    const toggleStartHandler = () => {
        toggleStarted(prev => !prev)
        togglePaused(true)
    }

    const togglePauseHandler = () => {
        togglePaused(prev => !prev)
    }

    const setTimerDurationHandler = (newTime) => {
        setTime(newTime);
    }
    
    return (
        <div className={style.container}>
            <section className={style.buttons}>
                <Button click={() => setTimerDurationHandler(25)}>Pomodoro</Button>
                <Button click={() => setTimerDurationHandler(5)}>Short Break</Button>
                <Button click={() => setTimerDurationHandler(10)}>Long Break</Button>
            </section>
            <Timer 
                start={started}
                continue={paused}
                time={time}/>
            <section className={style.buttons}>
                <Button click={toggleStartHandler}>{firstText}</Button>
                <Button click={togglePauseHandler}>{secondText}</Button>
            </section>
            
        </div>
    );
}


export default TomatoTimer