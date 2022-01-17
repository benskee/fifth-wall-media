import React from 'react'
import ReactPlayer from 'react-player/youtube'
import { Link } from "react-router-dom"

export default function UploadTutorial() {
    return (
        <div className='container col-6'>
            <div className='m-auto'>
                <ReactPlayer url="https://youtu.be/4zGxh1I58bs" controls />
            </div>
            <Link to="/upload"><button className="btn btn-block btn-primary col-3 mt-4 mx-auto">Upload Project</button></Link>
        </div>
    )
}
