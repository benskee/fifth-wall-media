import React, { Component } from 'react'
import ReactPlayer from 'react-player/youtube'
import Tree from '../fileTree/FileTree';
import CodeDisplay from './CodeDisplay';
import { getProject, adjust } from '../../services/codeProjectService';
import ProjectLinks from './ProjectLinks';
const _ = require('lodash');


export default class CodeProject extends Component {
    constructor() {
        super();
        this.state = {
            file: {
                body: {}
            },
            playedSeconds: 0,
            selectedFile: {}
        }
    }

    async componentDidMount() {
        const project = await getProject(this.props.match.params.id)
        this.setState({
            file: project
        })
    }

    handleSelect = objectPath => {
        this.setState({ selectedFile: _.get(this.state.file.body, objectPath, {})})
    }

    handleProgress = playerState => {
        if (!this.state.seeking) {  
            this.setState(playerState)
        }
    }

    render() {

        const { selectedFile, file, playedSeconds } = this.state
        const projectData = file.body
        const currentTime = adjust(playedSeconds, file.timeAdjust, file.interval);

        return (
            <div className='row'>
                <div className="col-md-3">
                    <Tree onSelect={this.handleSelect} selectedFile={selectedFile} currentTime={currentTime} treeData={projectData}/>
                </div>
                <div className="col-md-9 col-xl-6">
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