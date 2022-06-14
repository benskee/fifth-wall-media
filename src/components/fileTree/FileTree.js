import React from 'react'
import Branch from './Branch'
import Leaf from './Leaf';

function Tree(props) {
    const { onSelect, selectedFile, currentTime, treeData } = props

    return (
        <ul className="fileTree">
            {Object.keys(treeData).map(branch => {
                if (treeData[branch]["folder"] === true) {
                        return <Branch key={branch} treeData={treeData[branch]} branchName={branch} objectPath={branch}  onSelect={onSelect} selectedFile={selectedFile} currentTime={currentTime}/>
                    } else {
                        return <Leaf key={branch} name={treeData[branch]['name']} objectPath={branch} onSelect={onSelect} selectedFile={selectedFile} start={treeData[branch]['start']} currentTime={currentTime}/>
                        }
                    }
            )}
        </ul>
    )
}

export default Tree