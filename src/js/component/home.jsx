// Import
import React, { useState } from "react";

// Codigo
const [counter, setCounter] = useState(9876543210);
const [start, setStart] = useState('Start');

const handleStart = () => {
    setStart('Pause')
}

const handleReset = () => {
    setStart('Start');
    setCounter(0);
}

//Return
return (
    <div className="container" color="success">Simple Counter</div>
    <h2 className="text-primary">{'Clock'}</h2>
    <div className="big-counter">
        <div><i className="fa fa-clock fa-lg"></i></div>
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
                <button type="button" className="btn btn-otuline-success">{start}</button>
                <button type="button" className="btn btn-otuline-success">{'Reset'}</button>
            </div>
        </div>
    </div>
)
