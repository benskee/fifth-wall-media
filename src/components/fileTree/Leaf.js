import React from 'react';

function Leaf(props) {
    const { objectPath, selectedFile, name, start, currentTime, onSelect } = props;
    return (
        <>
            {start <= currentTime ? <li onClick={() => onSelect(objectPath)}>
                {selectedFile?.objectPath === objectPath ?
                    <span className="selectedFile">
                        {name}
                    </span> :
                    <span>{name}</span>}
            </li> : null}
        </>
    );
}

export default Leaf