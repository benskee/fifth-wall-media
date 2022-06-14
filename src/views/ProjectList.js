import React from 'react'
import FileDisplay from '../components/projects/FileDisplay';

function ProjectList(props) {
    return (
        <div>
            <h1 className="m-3 mb-5">Available Projects</h1>
            <FileDisplay user={props.user}/>
        </div>
    )
}

export default ProjectList
