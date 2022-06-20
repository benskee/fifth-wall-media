import React, { useState } from 'react';
import Joi from 'joi-browser';
import Form from '../components/common/Form';
import auth from '../services/authService'
import WelcomeBanner from '../components/welcome/WelcomeBanner';

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
        <div className='row'>
            <img className="image-fluid col-5 welcome-image d-none d-lg-flex" src="./static/images/hexagon_warp.jpg" alt="hexagon_warp" />
            <div className="container col-7 mx-auto">
                <WelcomeBanner text={"Don't have an account?"} link={"/register"} buttonLabel={"Register"} />
                <h1 className='m-3 mb-3'>Login</h1>
                <form onSubmit={(e) => Form.handleSubmit(formProps, doSubmit, e)}>
                    {Form.renderInput("username", "Username", formProps)}
                    {Form.renderInput("password", "Password", formProps, "password")}
                    {Form.renderButton('Login', formProps)}
                </form>
            </div>
        </div>
    )
}

export default Login