import React, { useState, useEffect } from 'react'
import Joi from 'joi-browser';
import { toast } from 'react-toastify';
import Form from '../components/common/Form';
import { deleteProject, getProject, updateProject } from '../services/editProjectService';
// import projectOptions from '../components/common/ProjectOptions'


function EditProject(props) {
    console.log('props', props)
    const [ data, setData ] = useState({ 
        mediaURL: '', 
        projectName: '', 
        timeAdjust: '', 
        interval: ''
    })
    const [ errors, setErrors ] = useState({})

    const schema = {
        projectName: Joi.string().required().label('Project Name'),
        mediaURL: Joi.string().required().label('Media Url'),
        timeAdjust: Joi.number().required().label('Time Adjust'),
        interval: Joi.number().required().label('Interval')
    }
    
    const id = props.match.params.id


    useEffect(async () => {
       const { user } = props
       
        if (!user) {
           return props.history.push("/login");
        }

        const file = await getProject(id)
        
        if (user.username !== file.username) {
            return props.history.push("/projects")
        }
        const newData = {...data}
        for (const attr in newData) { newData[attr] = file[attr]}
        setData(newData)
    }, [])

    const handleDelete = async () => {
        try {
            await deleteProject(id)
            toast.success('File deleted.')
            props.history.push("/projects");
        } catch (err) {
            if(err.response && err.response.status === 404) {
                alert("File already deleted.")
            }
        }
    }

    const doSubmit = async () => {
        try {
            await updateProject(id, data)
            toast.success('File updated.')
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

    return (
        <div>
            <h1 className="m-3 mb-5">Edit Project</h1>

            <div className="col-6 m-auto">
                <button className="btn btn-danger mb-4" onClick={() => handleDelete()}>Delete</button>
                <form onSubmit={(e) => Form.handleSubmit(formProps, doSubmit, e)}>
                    {Form.renderInput("mediaURL", "Media Url", formProps)}
                    {Form.renderInput("projectName", "Project Name", formProps)}
                    {Form.renderInput("timeAdjust", "Time Adjust", formProps)}
                    {Form.renderInput("interval", "Interval", formProps)}
                    {Form.renderButton("Submit", formProps)}
                </form>
            </div>
        </div>
    )
}

export default EditProject