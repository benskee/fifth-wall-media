import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import Tree from '../fileTree/FileTree';
import CodeDisplay from './CodeDisplay';
import { getProject, adjust } from '../../services/codeProjectService';
import ProjectLinks from './ProjectLinks';
const _ = require('lodash');


function CodeProject(props) {
    const [file, setFile] = useState({ body: {} })
    const [playedSeconds, setPlayedSeconds] = useState(0)
    const [selectedFile, setSelectedFile] = useState({})

    useEffect(async () => {
        const project = await getProject(props.match.params.id)
        setFile(project)
    }, [])

    const handleSelect = objectPath => {
        setSelectedFile( _.get(file.body, objectPath, {}) )
    }

    const handleProgress = playerState => {
        setPlayedSeconds(playerState.playedSeconds)
    }

    const projectData = file.body
    const currentTime = adjust(playedSeconds, file.timeAdjust, file.interval);

    return (
        <div className='row'>
            <div className="col-md-3">
                <Tree onSelect={handleSelect} selectedFile={selectedFile} currentTime={currentTime} treeData={projectData}/>
            </div>
            <div className="col-9 col-xxl-6">
                <div className='player-div'>
                    <ReactPlayer url={file.mediaURL} onProgress={handleProgress} controls />
                </div>
                <div className="mt-4 fwm-code-display">
                    {selectedFile !== projectData.Links ? <CodeDisplay selectedFile={selectedFile} currentTime={currentTime}/> : <ProjectLinks links={projectData.Links.stamps} currentTime={currentTime}/>}
                </div>
            </div>
        </div>
    )
}

export default CodeProject