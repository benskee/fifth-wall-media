import React, { useState } from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import auth from '../services/authService'

function Login() {
    const [ data, setData ] = useState({username: "", password: ""})
    const [ errors, setErrors ] = useState({})

    const schema = {
        username: Joi.string().required().label('username'),
        password: Joi.string().min(5).max(15).required(),
    }

    const doSubmit = async () => {
        try {
            await auth.login(data.username, data.password)
            window.location = '/'
        } catch (err) {
            if (err.response && err.response.status === 400) {
                const newErrors = {...errors}
                newErrors.username = err.response.data;
                setErrors(newErrors)
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
            <h1 className='m-3 mb-5'>Login</h1>
            <form onSubmit={(e) => Form.handleSubmit(formProps, doSubmit, e)} className="col-6 m-auto">
                {Form.renderInput("username", "Username", formProps)}
                {Form.renderInput("password", "Password", formProps, "password")}
                {Form.renderButton('Login', formProps)}
            </form>
        </div>
    )
}

export default Login