import React, { useEffect } from 'react'
import { toast } from "react-toastify"
import Prism from 'prismjs'
import "../prism.css"
const projectRecorder = require('../JSON/projectRecorder')


function Recorder() {
    useEffect(()=> {
        Prism.highlightAll();
    }, [])
    
    return (
        <div>
            <h1>projectRecorder.js<br/><br/></h1>
            <div className= 'container'>
                <div className="row">
                    <button className="btn btn-block btn-primary mb-4 col-2" onClick={() => {navigator.clipboard.writeText(projectRecorder); toast.success('File copied!')}}>Copy Code</button> 
                    <span className="col-2"></span>
                    <h6 className='col-8'>Run this file while you record your coding tutorial video and it will create a JSON file to sync your code with the Fifth Wall Platform.
                    </h6>
                </div>
                <pre className='fwm-code-block'><code className="language-javascript">
                    {JSON.parse(projectRecorder)}
                </code></pre>
            </div>
        </div>
    )
}

export default Recorder