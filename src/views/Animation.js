import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';
import Gif from '../components/animation/Gif'
import renderContainer from '../components/common/RenderContainer';


function Animation() {
    const [playedSeconds, setPlayedSeconds] = useState(0);
    
    const animationData = require('../JSON/animation.json')

    const handleProgress = state => {
        setPlayedSeconds(state.playedSeconds)
    };

    const currentTime = Math.max.apply(Math, Object.keys(animationData)
        .filter(x => { return x <= playedSeconds; })
        );
    const div1 = animationData[currentTime]["div1"];

    return (
        <div>
            <div className="container m-2">
                <div className="row">
                    <div className="col-12 row">
                        <div className="container col-8 mt-3 py-2 border border-dark">
                            <ReactPlayer url="https://youtu.be/0ZuHI-VW6oo" width="100%" onProgress={handleProgress} controls />
                            {renderContainer(div1)}
                        </div>
                        <Gif currentTime={currentTime} projectData={animationData}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Animation