import React, { useState, useEffect } from 'react'
import Joi from 'joi-browser';
import { Link } from "react-router-dom"
import Form from '../components/common/Form';
// import projectOptions from '../components/common/ProjectOptions'
import { upload } from './../services/uploadService';

function Upload(props) {
    const [ data, setData ] = useState({ 
        username: '', 
        selectedFile: null, 
        mediaURL: '', 
        projectName: '', 
        projectType: 'code', 
        timeAdjust: 0, 
        interval: 5 
    })
    const [ errors, setErrors ] = useState({})

    const schema = {
        username: Joi.string().required().label('Username'),
        projectName: Joi.string().required().label('Project Name'),
        mediaURL: Joi.string().required().label('Media Url'),
        projectType: Joi.string().required().label('Project Type'),
        timeAdjust: Joi.number().required().label('Time Adjust'),
        interval: Joi.number().required().label('Interval'),
        selectedFile: Joi.object().required().error(() => {
            return {message: 'Please select a file to upload.'}})
        // projectOptions: Joi.string().required.label('projectOptions')
    }

    useEffect(()=> {
        const { user } = props
        if (user) {
            const newData = {...data}
            newData.username = user.username
            setData(newData)
        }
    }, [])

    const doSubmit = async () => {
        try {
            await upload(data)
            
            props.history.push("/projects");
        } catch (err) {
            if(err.response && err.response.status === 400) {
            const newErrors = { ...errors };
            const { type, message } = err.response.data
            newErrors[type] = message;
            setErrors({ newErrors })
            }
        }
    }

    const formProps = {
        data,
        setData,
        errors,
        setErrors,
        schema
    }

    const { user } = props
    return (
        <div>
            <h1 className="m-3 mb-5">Upload Project</h1>
            <Link to="/tutorial/upload"><button className="btn btn-block btn-primary col-2  m-auto">View Upload Tutorial</button></Link>
            {user ? <form encType="multipart/form-data" onSubmit={(e)=>Form.handleSubmit(formProps, doSubmit, e)} className="col-6 m-auto">
                {Form.renderInput("mediaURL", "Media Url", formProps)}
                {Form.renderInput("projectName", "Project Name", formProps)}
                {Form.renderInput("timeAdjust", "Time Adjust", formProps)}
                {Form.renderInput("interval", "Interval", formProps)}
                {/* {Form.renderSelect("projectOptions", "Project Options", projectOptions)} */}
                {Form.renderFileSelect(formProps)}
                {Form.renderButton("Submit", formProps)}
            </form> : <h5 className='mt-4' style={{ textAlign: 'center' }}><Link to="/login">Login</Link> or <Link to="/register">register</Link> to upload a project.</h5> }
        </div>
    )
}

export default Upload