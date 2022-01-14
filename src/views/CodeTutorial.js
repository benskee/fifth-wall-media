import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import Tree from '../components/fileTree/FileTree';
import CodeDisplay from '../components/common/CodeDisplay';
import { adjust } from '../services/codeProjectService';
import { Link } from 'react-router-dom';
const _ = require('lodash');
const projectData = require('../JSON/code.json')


export default class CodeProject extends Component {
    constructor() {
        super();
        this.state = {
            projectData: projectData,
            selectedFile: projectData.links,
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
                    <div className="mt-4">
                        {selectedFile != this.state.projectData.links ? <CodeDisplay selectedFile={selectedFile} currentTime={currentTime}/> : 
                            <div>
                                <h3>Links</h3>
                                <h5>The source code for the Fifth Wall Media Platform can be found at:<br/>
                                    Frontend: <a href='https://github.com/benskee/fifth-wall-media'>https://github.com/benskee/fifth-wall-media</a> <br/>
                                    Backend: <a href='https://github.com/benskee/fifth-wall-media-api'>https://github.com/benskee/fifth-wall-media-api</a><br/><br/>
                                    If you would like to see more Fifth Wall Media projects go to the <Link to='/projects'>Projects</Link> page.<br/><br/>

                                    If you would like to upload your own project register <Link to='/register'>here</Link>!
                                </h5>
                            </div>}
                    </div>
                </div>
            </div>
        )
    }
}