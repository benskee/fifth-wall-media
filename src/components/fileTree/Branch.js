import React from 'react';
import Leaf from './Leaf';


function Branch(props) {

    const handleArrowClick = (e) => {
        e.target.classList.toggle("folder-down");
        e.target.parentElement.querySelector(".nested").classList.toggle("active");
    };

    const { treeData, branchName, objectPath, onSelect, selectedFile, currentTime } = props;
    return (

        <>
            {treeData.start <= currentTime ? <li>
                <span className="folder" onClick={handleArrowClick}>{branchName}</span>
                <ul className="nested">
                    {Object.keys(treeData).map(name => {
                        if (!['folder', 'start'].includes(name)) {
                            if (treeData[name]["folder"] === true) {
                                return <Branch key={name} treeData={treeData[name]} branchName={name} objectPath={`${objectPath}.${name}`} onSelect={onSelect} selectedFile={selectedFile} currentTime={currentTime} />;
                            } else {
                                return <Leaf key={name} name={treeData[name]['name']} objectPath={`${objectPath}.${name}`} onSelect={onSelect} selectedFile={selectedFile} start={treeData[name]['start']} currentTime={currentTime} />;
                            }
                        } else {
                            return null;
                        }
                    }
                    )}
                </ul>
            </li> : null}
        </>
    );
}

export default Branch