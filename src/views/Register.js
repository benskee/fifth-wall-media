import React, { useState } from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import { register } from '../services/userService'
import auth from '../services/authService'

function Register() {
    const [ data, setData ] = useState({ 
        username: '', 
        email: '', 
        password: '', 
        confirmPassword: '' 
    })
    const [ errors, setErrors ] = useState({})
    const [ submitted, setSubmitted ] = useState(false);

    const schema = {
        username: Joi.string().required().label('Username'),
        email: Joi.string().required().email().label('Email'),
        password: Joi.string().min(5).max(15).required().label('Password'),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } })
    }

    const doSubmit = async () => {
        setSubmitted(true)
        try {
            const response = await register(data);
            auth.loginWithJwt(response.headers["x-auth-token"])
            window.location = '/projects'
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
            <h1 className='m-3 mb-2'>Register</h1>
            <form onSubmit={(e) => Form.handleSubmit(formProps, doSubmit, e)} className="col-6 m-auto">
                {Form.renderInput("username", "Username", formProps)}
                {Form.renderInput("email", "Email", formProps)}
                {Form.renderInput("password", "Password", formProps, "password")}
                {Form.renderConfirmPassword("confirmPassword", "Confirm Password", formProps)}
                {Form.renderButton('Register', formProps)}
            </form>
        </div>
    )
}

export default Register
