import React, {useState, useEffect} from 'react'


export default function Timer(props) {

    const [timer, updateTimer] = useState(0);
    
    
    /* Problema: Quando o timer bate, deveria reiniciar o tempo, o que não esta acontecendo.*/
    let alertText = {
        5: "Sua pausa acabou!",
        10: "Sua pausa acabou!",
        25: "Pomodoro! Descanse!"
    }
    useEffect(() => {
        if (isClockRunnable())
            ticTac();
        else {
            checkTime();
        }
    });

    useEffect(() => {
        if(timer === 0) {
            return;
        }

        document.title = `Seu timer: ${Math.floor(timer/60)}m${timer%60}`
    }, [timer]);

    useEffect (() => {
        updateTimer(0);
    }, [props.start])


    const isClockRunnable = () => 
    props.start && props.continue && timer < props.time*60

    const ticTac = () => {
        setTimeout( () => {
            updateTimer(prevTimer => prevTimer+1)
        }, 10)
    }

    const checkTime = () => {
        if(timer === props.time*60) {
            alert(alertText[props.time]);
            updateTimer(0);
        }
    }


    return (
        <div>
            Timer: {Math.floor(timer/60)}m{timer%60}s
        </div>
    )
};