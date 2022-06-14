import React from 'react'

function Gif(props) {

    const { projectData, currentTime } = props
    let gif = ''
    let link = '';
    
    projectData[currentTime] && (gif = projectData[currentTime]["gif"])
    projectData[currentTime] && (link = projectData[currentTime]["link"])

    return (
        <div className="col-4" id= "gif">
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={gif} alt=""/>
            </a>
        </div>
    )
}

export default Gif