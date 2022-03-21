import React, { Component } from 'react'
import { highestValue, getCodeClass } from '../../services/codeDisplayService';
import Prism from 'prismjs'
import 'prismjs/components/prism-json';
import "../../prism.css"

export default class CodeDisplay extends Component {
    componentDidMount() {
        Prism.highlightAll();
    }
    componentDidUpdate() {
        Prism.highlightAll();
    }

    render() {
        const { selectedFile, currentTime } = this.props
        var code = selectedFile.stamps ? selectedFile.stamps[highestValue(selectedFile.stamps, currentTime)]: null
        return (
            <div>
                {code ? <div>
                    <h3>{selectedFile.name} <br/><br/></h3> 
                    <pre className={getCodeClass()}><code id='code' className={`language-${selectedFile.fileType}`}>{JSON.parse(selectedFile.stamps[highestValue(selectedFile.stamps, currentTime)])}</code></pre>
                </div> : <h3>Select a file to display.</h3>}
            </div>
        )
    }
}
