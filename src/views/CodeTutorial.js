import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import Tree from '../components/fileTree/FileTree';
import CodeDisplay from '../components/codeTutorial/CodeDisplay';
import ProjectLinks from '../components/codeTutorial/ProjectLinks';
import { adjust } from '../services/codeProjectService';
const _ = require('lodash');
const projectData = require('../JSON/code.json')


export default class CodeTutorial extends Component {
    constructor() {
        super();
        this.state = {
            projectData: projectData,
            selectedFile: projectData.Links,
            file: {
                timeAdjust: 0,
                interval: 2.5,
                mediaURL: "https://youtu.be/-VaxKe0TgMU"
            },
            playedSeconds: 0
        }
    }

    handleSelect = objectPath => {
        this.setState({ selectedFile: _.get(this.state.projectData, objectPath)})
    }

    handleProgress = state => {
        this.setState({
            playedSeconds: state.playedSeconds
        })
        if (!this.state.seeking) {
            this.setState(state)
        }
    }

    render() {

        const { selectedFile, file, playedSeconds, projectData } = this.state
        const currentTime = adjust(playedSeconds, file.timeAdjust, file.interval);

        return (
            <div className='row'>
                <div className="col-md-3">
                    <Tree onSelect={this.handleSelect} selectedFile={selectedFile} currentTime={currentTime} treeData={projectData}/>
                </div>
                <div className="col-md-9">
                    <div>
                        <ReactPlayer url={file.mediaURL} onProgress={this.handleProgress} controls />
                    </div>
                    <div className="mt-4 fwm-code-display">
                        {selectedFile !== projectData.Links ? <CodeDisplay selectedFile={selectedFile} currentTime={currentTime}/> : <ProjectLinks links={projectData.Links.stamps} currentTime={currentTime}/>}
                    </div>
                </div>
            </div>
        )
    }
}