import React, { useState } from 'react';
import ReactPlayer from 'react-player/soundcloud'

function Chart() {
    const [playedSeconds, setPlayedSeconds] = useState(0)
    const chartData = require('../JSON/chart.json')

    const handleProgress = playerState => {
        setPlayedSeconds(playerState.playedSeconds)
    };

    const currentTime = Math.max.apply(Math, Object.keys(chartData).filter(function (x) { return x <= playedSeconds; }));
    const slide = chartData[currentTime]["slide"]
    const link = chartData[currentTime]["link"]
    return (
        <div className="container m-2">
            <ReactPlayer url="https://soundcloud.com/ben-skee-378863056/chart-deck" onProgress={handleProgress} controls />
            <br/>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <div className='chartImage'>
                    <img className='img-fluid' src={`./static/chartDeck/${slide}_bitstonker.png`} alt="" />
                </div>
            </a>
        </div>
    );
}

export default Chart