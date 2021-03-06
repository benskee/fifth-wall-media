import React, { useEffect } from 'react'
import { highestValue, getCodeClass } from '../../services/codeDisplayService';
import Prism from 'prismjs'
import 'prismjs/components/prism-json';
import "../../prism.css"

function CodeDisplay(props) {
    const { selectedFile, currentTime } = props
    let code = selectedFile.stamps ? selectedFile.stamps[highestValue(selectedFile.stamps, currentTime)]: null
    
    useEffect(()=>{
        Prism.highlightAll()
    }, [selectedFile, code])

    return (
        <div className='code-container'>
            {code ? <div>
                <h3 className='code-title'>{selectedFile.name}</h3> 
                <pre className={`fwm-code-block + ${getCodeClass()}`}><code id='code' className={`language-${selectedFile.fileType}`}>{JSON.parse(code)}</code></pre>
            </div> : <h3 className='select-file'>Select a file to display.</h3>}
        </div>
    )
}

export default CodeDisplay