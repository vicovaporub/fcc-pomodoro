import React, { useEffect, useRef, useState } from 'react'


export const Pomodoro = () => {
    
    const [breakLength, setBreakLength] = useState(5)
    const [breakTimer, setBreakTimer] = useState(breakLength)
    const [sessionLength, setSessionLength] = useState(25)
    const [seconds, setSeconds] = useState(0)
    const [minutes, setMinutes] = useState(sessionLength)
    const [alarm, setAlarm] = useState(false)
    const [pause, setPause] = useState(true)
    const [displayText, setDisplayText] = useState(false)
    const [reset, setReset] = useState(true)

    const beepRef = useRef(null)

    
    let statusMsg = ``
    if (displayText === false) {
        statusMsg = `Session Time!`
    }
    if (displayText === true) {
        statusMsg = `Break Time!`
    }
    
    useEffect(() => {
        if(alarm === true) {
            beepRef.current.play()
        } 
    },[alarm])
    
    useEffect(() => {
        let interval
        
        if (!pause || !reset) {
            interval = setInterval(() => {
                    clearInterval(interval)
                    
                    if (seconds === 0) {
                        if (minutes !== 0) {
                            setSeconds(59)
                            setMinutes(minutes - 1)
                        } else if (seconds === 0 && minutes === 0) {
                            let minutes = displayText ? sessionLength : breakTimer
                            setAlarm(true)
                            setMinutes(minutes)
                            setDisplayText(!displayText)
                            
                        }
                    } else {
                        setSeconds(seconds - 1)
                        setAlarm(false)
                    }
                    
                }, 1000)
            }
            
            return () => {
                clearInterval(interval)
            }
            
            
        }, [seconds, pause, breakTimer, displayText, minutes, reset, sessionLength])
    
        
        
        const handlePause = () => {
            setPause(!pause)
        }
        
        
        const sessionIncrementButton = () => {
            if (sessionLength >= 1 && sessionLength < 60) {
                setSessionLength(minutes + 1)
                setMinutes(minutes + 1)
            }
        }
        
        const sessionDecrementButton = () => {
            if (sessionLength > 1) {
                setSessionLength(minutes - 1)
                setMinutes(minutes - 1)
            }
        }
        

        const breakIncrementButton = () => {
            if (breakLength >= 1 && breakLength < 60) {
                setBreakLength(breakLength + 1)
                setBreakTimer(breakLength)
            }
        }
        
        const breakDecrementButton = () => {
            if (breakLength > 1) {
                setBreakLength(breakLength - 1)
                setBreakTimer(breakLength - 1)
            }
    }
    

    const resetButton = () => {
        beepRef.current.pause()
        beepRef.current.currentTime = 0
        setReset(true)
        setAlarm(false)
        setBreakTimer(5)
        setBreakLength(5)
        setSessionLength(25)
        setMinutes(25)
        setSeconds(0)
        setPause(true)
        setDisplayText(false)
    }
    


    const properMinutes = minutes < 10 ? `0${minutes}` : minutes
    const properSeconds = seconds < 10  ? `0${seconds}` : seconds

    return (
        <div id="pomodoro-timer" className="pomodoro-timer">
            <div id="session-label" className="length-control">
                <h1>Session Length</h1>
                <div id="session-length">{sessionLength}</div>
                <button id="session-increment" className="session-increment" value="+" onClick={sessionIncrementButton}>+</button>
                <button id="session-decrement" className="session-decrement" value="-" onClick={sessionDecrementButton}>-</button>
            </div>
            <div id="break-label" className="length-control">
                <h1>Break Length</h1>
            <div id="break-length">{breakLength}</div>
                 <button id="break-increment" className="break-increment" value="+" onClick={breakIncrementButton}>+</button>
                 <button id="break-decrement" className="break-decrement" value="-" onClick={breakDecrementButton}>-</button>
            </div>
            <div id="timer" className="timer">
                <div id="timer-label">
                    <h1>{statusMsg}</h1>
                </div>
                <div id="time-left">{properMinutes}:{properSeconds}</div>
                <audio id="beep" ref={beepRef} src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
            </div>
            <div id="timer-control" className="timer-control">
                <button id="start_stop" onClick={handlePause}>Start/Stop</button>
                <button id="reset" onClick={resetButton}>Reset</button>
            </div>
        </div>
    )
}