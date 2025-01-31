import React, { useState, useEffect } from "react";


const CounterComponent = () => {
    const [counter, setCounter] = useState(9876543210);
    const [isRunning, setIsRunning] = useState(false);
    const [start, setStart] = useState('Start');
    const [icon, setIcon] = useState('clock');
    const [subtitle, setSubtitle] = useState({ text: 'Clock', color: 'primary' });

    useEffect(() => {
        let interval;

        if (isRunning) {
            interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);
        } else if (!isRunning && counter !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isRunning, counter]);

    const handleStart = () => {
        setIsRunning(!isRunning);
        setIcon(isRunning ? 'clock' : 'stopwatch');
        setSubtitle({ text: isRunning ? 'Clock' : 'Chronometer', color: isRunning ? 'primary' : 'warning' });

        if (isRunning) {
            setStart('Pause');
        } else {
            setStart(counter === 0 ? 'Start' : 'Continue');
        }
    };

    const handleReset = () => {
        setCounter(0);
        setIsRunning(false);
        setStart('Start');
        setIcon('clock');
        setSubtitle({ text: 'Clock', color: 'primary' });
    };

    return (
        <div className="container" style={{ color: 'success' }}>
            <h2 className={`text-${subtitle.color}`}>{subtitle.text}</h2>
            <div className="big-counter">
                <div><i className={`fa fa-${icon} fa-lg`} /></div>
                <div>{Math.floor(counter / 10000000 % 10)}</div>
                <div>{Math.floor(counter / 1000000 % 10)}</div>
                <div>{Math.floor(counter / 100000 % 10)}</div>
                <div>{Math.floor(counter / 10000 % 10)}</div>
                <div>{Math.floor(counter / 1000 % 10)}</div>
                <div>{Math.floor(counter / 100 % 10)}</div>
                <div>,</div>
                <div>{Math.floor(counter / 10 % 10)}</div>
                <div>{Math.floor(counter % 10)}</div>
                <div>
                    <div className="btn-group-vertical" role="group" aria-label="Vertical button group">
                        <button
                            type="button"
                            className="btn btn-outline-success"
                            onClick={handleStart}
                        >
                            {start}
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-success"
                            onClick={handleReset}
                        >
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CounterComponent;
